import { Logo } from '@/components/common/logo';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { NavigationLink } from '@/components/common/navigation-link';
import { footerNavigationItems, socialLinks } from '@/lib/data/navigation';

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-30 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo size="lg" />
        </Link>

        {/* Navigation Links */}
        <nav className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {footerNavigationItems.map((link, index) => (
            <NavigationLink key={index} href={link.href} className="hover:text-primary">
              {link.name}
            </NavigationLink>
          ))}
        </nav>

        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
            >
              {social.icon === 'github' && <Github className="size-6" />}
              {social.icon === 'linkedin' && <Linkedin className="size-6" />}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Angelo Manalo. All rights reserved
        </p>

        {/* Tech Credits */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="text-muted-foreground text-xs">built with</span>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block w-4 h-4"
              style={{
                backgroundColor: 'currentColor',
                WebkitMaskImage: 'url(/assets/technical-skills/nextdotjs.svg)',
                maskImage: 'url(/assets/technical-skills/nextdotjs.svg)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
            <span
              aria-hidden="true"
              className="inline-block w-4 h-4"
              style={{
                backgroundColor: 'currentColor',
                WebkitMaskImage: 'url(/assets/technical-skills/tailwindcss.svg)',
                maskImage: 'url(/assets/technical-skills/tailwindcss.svg)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
            <span
              aria-hidden="true"
              className="inline-block w-4 h-4"
              style={{
                backgroundColor: 'currentColor',
                WebkitMaskImage: 'url(/assets/technical-skills/shadcnui.svg)',
                maskImage: 'url(/assets/technical-skills/shadcnui.svg)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
            <span
              aria-hidden="true"
              className="inline-block w-4 h-4"
              style={{
                backgroundColor: 'currentColor',
                WebkitMaskImage: 'url(/assets/technical-skills/gsap.svg)',
                maskImage: 'url(/assets/technical-skills/gsap.svg)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
