// src/components/menus/MenuList.tsx
import {MENU} from "@/constants/menu";
import {MenuItem} from "./MenuItem";
import {cn} from "@/lib/utils";

interface MenuListProps {
  isMobile?: boolean;
  className?: string;
}
/**
 * MenuListProps is an interface for defining the properties
 * that can be passed to the MenuList component.
 *
 * @property {boolean} [isMobile] - An optional boolean that determines
 * whether the component should be rendered for mobile view.
 * @property {string} [className] - An optional string to override or extend
 * the default class names applied to the component.
 */
export const MenuList = ({
  isMobile = false,
  className,
}: MenuListProps) => {
  return (
    <div className={cn(isMobile ? "md:hidden" : "hidden md:block", className)}>
      <div
        className={cn(
          isMobile ? "space-y-1 px-2 pb-3 pt-2" : "flex items-center space-x-4",
        )}
      >
        {MENU.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            href={item.href}
            className={cn(
              isMobile ? "block px-3 py-2 text-base" : "px-3 py-2 text-sm",
            )}
          />
        ))}
      </div>
    </div>
  );
};
