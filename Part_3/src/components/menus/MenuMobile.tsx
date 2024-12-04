// src/components/menus/MobileMenu.tsx
import {Menu, X} from "lucide-react";
import {MenuList} from "./MenuList";

interface MenuMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}
/**
 * MenuMobile Component
 *
 * This component renders a mobile menu interface that toggles visibility
 * based on the `isOpen` prop. It includes a button for toggling the menu
 * and renders the `MenuList` component.
 *
 * Props:
 * - isOpen (boolean): Determines whether the menu is open or closed.
 * - onToggle (function): A callback function invoked when the toggle button is clicked.
 */
export const MenuMobile = ({ isOpen, onToggle }: MenuMobileProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#002c5f] focus:outline-none transition-colors duration-200"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={`
          absolute left-0 right-0 bg-[#00213F] 
          transition-all duration-300 ease-out
          overflow-hidden top-16
          ${isOpen ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        <div className="p-4">
          <MenuList isMobile />
        </div>
      </div>
    </div>
  );
};
