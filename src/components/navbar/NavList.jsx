import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";

import NavigationItem from "./NavigationIten";

function NavList() {
  return (
    <NavigationMenu.Root className="relative z-10 mx-auto hidden w-full max-w-7xl justify-end md:flex">
      <NavigationMenu.List className="flex list-none gap-1 rounded-md p-1">
        <NavigationItem />

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <a
              href="#"
              className="block rounded px-3 py-2 text-sm font-normal text-gray-800 hover:text-red-600"
            >
              About
            </a>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/shop"
            className="block rounded px-3 py-2 text-sm font-normal text-gray-800 hover:text-red-600"
          >
            Shop
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="absolute top-full flex h-2.5 items-end justify-center overflow-hidden transition-all">
          <div className="relative top-[70%] h-2 w-2 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute top-full left-0 mt-2.5 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md bg-white sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          "focus:shadow-violet7 block rounded-md p-3 text-[15px] leading-none no-underline transition-colors outline-none select-none hover:bg-red-50! focus:shadow-[0_0_0_2px]",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] leading-[1.2] font-medium">{title}</div>
        <p className="text-mauve11 text-sm leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavList;
