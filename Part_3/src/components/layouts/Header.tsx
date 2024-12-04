import React, {useState} from "react";
import {MenuList} from "../menus/MenuList";
import {NavigationMenu} from "@/components/ui/NavigationMenu"
import {ThemeToggle} from "@/components/common/ThemeToggle";
import {Logo} from "@/components/common/Logo";
import {MenuMobile} from "@/components/menus/MenuMobile";

/**
 * Header Component
 * 
 * This component renders the header of the application, which includes:
 * - A navigation menu using <NavigationMenu>
 * - A logo using <Logo>
 * - A list of menu items using <MenuList>
 * - A theme toggle switch using <ThemeToggle>
 * - A mobile menu component <MenuMobile> that can be toggled
 * - A decorative gradient bar
 * 
 * It uses React's useState hook to manage the state of the mobile menu.
 */
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-[#003e84] text-white">
      <NavigationMenu className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          <Logo />
          <MenuList />
          <ThemeToggle/>
          <MenuMobile
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </NavigationMenu>
      {/* Barrette facultaire */}
      <div className="w-full h-1 bg-gradient-to-r from-[#161579] via-[#E31937] to-[#90A73F]" />
    </header>
  );
};
