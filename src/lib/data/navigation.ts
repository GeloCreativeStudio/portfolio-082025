// Navigation configuration for consistent navigation across components
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

// Main navigation items matching the page structure order
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

// Social media links
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

// Action buttons for header
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

// Footer specific navigation (can include additional links)
export const footerNavigationItems: NavigationItem[] = [...navigationItems];
