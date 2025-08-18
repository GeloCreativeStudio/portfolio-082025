/**
 * Navigation configuration used across header and footer.
 *
 * Keep names and order in sync with on-page sections for a consistent UX.
 */
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

// Main navigation items matching the page structure order
/** Primary navigation items in on-page order. */
export const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '#hero',
    description: 'Back to top',
  },
  {
    name: 'About',
    href: '#about',
    description: 'Learn about me',
  },
  {
    name: 'Projects',
    href: '#projects',
    description: 'View my work',
  },
  {
    name: 'Designs',
    href: '#designs',
    description: 'Creative portfolio',
  },
  {
    name: 'Skills',
    href: '#skills',
    description: 'Technical expertise',
  },
  {
    name: 'Contact',
    href: '#contact',
    description: 'Get in touch',
  },
];

/** Social media links rendered in the footer. */
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/GeloCreativeStudio',
    icon: 'github' as const,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/angelo-manalo',
    icon: 'linkedin' as const,
  },
];

/** Action buttons rendered on the right side of the header. */
export interface ActionButton {
  name: string;
  href: string;
  variant?: 'outline' | 'default';
  size?: 'sm' | 'lg' | 'default' | 'icon';
  icon?: string;
  newTab?: boolean;
}

export const actionButtons: ActionButton[] = [
  {
    name: 'Contact',
    href: '#contact',
    variant: 'outline',
    size: 'sm',
  },
  {
    name: 'Resume',
    href: 'https://flowcv.com/resume/3b7s6mssund3',
    size: 'sm',
    newTab: true,
  },
];

/** Footer navigation (mirrors primary navigation; extend as needed). */
export const footerNavigationItems: NavigationItem[] = [...navigationItems];
