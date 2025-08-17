import os
import time
import requests
import sys
import re

# Detect if running on Windows to avoid Unicode emoji in output
USE_ASCII = os.name == "nt"

# Output directory for generated/fetched SVGs
OUT_DIR = os.path.join("misc", "skill-icons")
os.makedirs(OUT_DIR, exist_ok=True)

# List of icon identifiers from your icon.tsx import
icons = [
    "SiHtml5", "SiCss3", "SiJavascript", "SiTypescript", "SiTailwindcss", "SiReact", "SiNextdotjs",
    "SiNodedotjs", "SiSupabase", "SiGit", "SiGithub", "SiFlask", "SiPython", "SiNetlify", "SiVercel",
    "SiAdobeillustrator", "SiAdobephotoshop", "SiOpenai", "SiGooglegemini", "SiGithubcopilot", "SiAnaconda",
]

slug_map = {
    "SiHtml5": "html5", "SiCss3": "css3", "SiJavascript": "javascript", "SiTypescript": "typescript",
    "SiTailwindcss": "tailwindcss", "SiReact": "react", "SiNextdotjs": "nextdotjs", "SiNodedotjs": "nodedotjs",
    "SiSupabase": "supabase", "SiGit": "git", "SiGithub": "github", "SiFlask": "flask", "SiPython": "python",
    "SiNetlify": "netlify", "SiVercel": "vercel", "SiAdobeillustrator": "adobeillustrator",
    "SiAdobephotoshop": "adobephotoshop", "SiOpenai": "openai", "SiGooglegemini": "googlegemini",
    "SiGithubcopilot": "githubcopilot", "SiAnaconda": "anaconda",
}

URL_TEMPLATES = [
    "https://cdn.simpleicons.org/{slug}",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/{slug}.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/{slug}.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/{slug}.svg",
]

HEADERS = {"User-Agent": "svg-fetcher/1.0"}

def make_svg_black(svg_content: str) -> str:
    """Convert SVG to black color by modifying fill attributes and adding CSS."""
    # Remove existing fill attributes that aren't "none"
    svg_content = re.sub(r'fill="[^"]*"(?!\s*=\s*"none")', 'fill="black"', svg_content)
    svg_content = re.sub(r"fill='[^']*'(?!\s*=\s*'none')", "fill='black'", svg_content)
    
    # Add CSS style to make all paths black if no fill is specified
    if '<defs>' in svg_content:
        # Insert style after existing defs
        svg_content = svg_content.replace('<defs>', '<defs><style>path:not([fill="none"]) { fill: black !important; }</style>')
    elif '<svg' in svg_content:
        # Add defs with style after svg opening tag
        svg_content = svg_content.replace('>', '><defs><style>path:not([fill="none"]) { fill: black !important; }</style></defs>', 1)
    
    # Ensure the main svg element doesn't have a conflicting fill
    svg_content = re.sub(r'(<svg[^>]*)\sfill="[^"]*"', r'\1 fill="black"', svg_content)
    
    return svg_content

def try_fetch_svg(slug: str, timeout=10):
    for tpl in URL_TEMPLATES:
        url = tpl.format(slug=slug)
        try:
            resp = requests.get(url, headers=HEADERS, timeout=timeout)
        except Exception as e:
            print(f"  -> network error when trying {url}: {e}")
            continue
        if resp.status_code == 200 and resp.text.strip().startswith("<svg"):
            # Make the SVG black before returning
            black_svg = make_svg_black(resp.text)
            return black_svg, url
    return None, None

def make_placeholder_svg(label: str, size=128):
    text = label.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return f"""<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 {size} {size}">
  <rect width="100%" height="100%" fill="black"/>
  <text x="50%" y="50%" font-family="Arial" font-size="{max(10, size//8)}" dominant-baseline="middle" text-anchor="middle" fill="white">{text}</text>
</svg>
"""

def save_svg(content: str, filename: str):
    path = os.path.join(OUT_DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    return path

def main():
    print("Starting SVG fetch/generate...")
    for ident in icons:
        print(f"\nProcessing {ident}...")
        slug = slug_map.get(ident, ident[2:].lower())
        svg_text, url_used = try_fetch_svg(slug)
        if svg_text:
            filename = f"{slug}.svg"
            save_svg(svg_text, filename)
            if USE_ASCII:
                print(f"  [OK] fetched from {url_used}")
            else:
                print(f"  ✅ fetched from {url_used}")
            time.sleep(0.2)
            continue
        placeholder = make_placeholder_svg(ident.replace("Si", ""), size=128)
        filename = f"{slug}.svg"
        save_svg(placeholder, filename)
        if USE_ASCII:
            print(f"  [WARN] placeholder created")
        else:
            print(f"  ⚠️  placeholder created")
        time.sleep(0.1)
    print(f"\nAll files are in the folder: {OUT_DIR}")

if __name__ == "__main__":
    main()
