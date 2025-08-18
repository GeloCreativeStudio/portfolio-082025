'use client';
import Link from 'next/link';
import { Logo } from '@/components/common/logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/common/theme-toggle';
import { NavigationLink } from '@/components/common/navigation-link';
import { navigationItems, actionButtons } from '@/lib/data/navigation';
import React from 'react';

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);

  const closeMenu = () => setMenuState(false);

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl group"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo size="md" />
              </Link>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                aria-expanded={menuState}
                aria-controls="mobile-menu"
                className="relative z-20 -m-2.5 -mr-4 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </Button>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {navigationItems.map((item, index) => (
                    <li key={index}>
                      <NavigationLink href={item.href}>{item.name}</NavigationLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Menu & Actions */}
            <div
              id="mobile-menu"
              className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent"
            >
              {/* Mobile Navigation */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navigationItems.map((item, index) => (
                    <li key={index}>
                      <NavigationLink href={item.href} onClick={closeMenu}>
                        {item.name}
                      </NavigationLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ModeToggle />
                {actionButtons.map((btn, idx) => (
                  <Button
                    asChild
                    key={btn.name + idx}
                    variant={btn.variant || 'default'}
                    size="sm"
                    onClick={closeMenu}
                  >
                    <Link
                      href={btn.href}
                      target={btn.newTab ? '_blank' : undefined}
                      rel={btn.newTab ? 'noopener noreferrer' : undefined}
                    >
                      <span>{btn.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};