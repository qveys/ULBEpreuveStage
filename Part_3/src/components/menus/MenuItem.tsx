// src/components/menus/MenuItem.tsx
import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";

interface MenuItemProps {
  title: string;
  href: string;
  className?: string;
}
/**
 * MenuItemProps defines the properties for the MenuItem component.
 * 
 * @property {string} title - The text to be displayed for the menu item.
 * @property {string} href - The URL the menu item links to.
 * @property {string} [className] - Optional additional CSS classes to apply to the menu item.
 */
export const MenuItem = ({ title, href, className }: MenuItemProps) => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <a
      href={href}
      className={cn(
        "rounded-md font-medium text-white hover:bg-[#002c5f] transition-colors",
        href === currentPath ? "bg-[#002c5f]" : "",
        className,
      )}
    >
      {title}
    </a>
  );
};
