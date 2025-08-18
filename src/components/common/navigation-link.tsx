import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Styled Next.js `Link` with sensible defaults for header/footer navigation.
 */
export function NavigationLink({
  href,
  children,
  className,
  onClick,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'text-muted-foreground hover:text-foreground transition-colors duration-150',
        className
      )}
    >
      {children}
    </Link>
  );
}
