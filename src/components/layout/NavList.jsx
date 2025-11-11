import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

function NavList() {
  return (
    <NavigationMenu.Root className="relative z-10 hidden md:flex md:w-2xl justify-center p-3">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md p-1 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center   justify-between gap-0.5 rounded px-3 py-2.5 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
             Home Appliances{" "}
            <CaretDownIcon
              className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end] bg-amber-950 :animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                    href="/"
                  >
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                    Amin Prass
                    </div>
                    <p className="text-[14px] leading-[1.3] text-mauve4">
                       Home of quality appliances delivered to your doorstep.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Refrigerators">
                Wide range of modern refrigerators
              </ListItem>
              <ListItem href="/colors" title="Washing Machines">
                Beautiful, High-efficiency washing machines.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Microwaves">
                Latest microwave ovens for every kitchen.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2.5 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
            Electronics{" "}
            <CaretDownIcon
              className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto  bg-amber-950 ">
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-2">
              <ListItem
                title="Smartphones"
                href="/primitives/docs/guides/styling"
              >
                Latest mobile phones from top brands.
              </ListItem>
              <ListItem
                title="Laptops"
                href="/primitives/docs/guides/animation"
              >
                Powerful laptops for work & gaming.
              </ListItem>
              <ListItem
                title="Televisions"
                href="/primitives/docs/overview/accessibility"
              >
                High-definition smart TVs.
              </ListItem>
              <ListItem
                title="Headphones"
                href="/primitives/docs/overview/releases"
              >
                Noise-cancelling headphones.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded px-3 py-2 text-[35px]  font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
            style={{ fontSize: "15px" }}
            href="https://github.com/radix-ui"
          >
            Contact Us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded px-3 py-2 text-[35px]  font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
            style={{ fontSize: "15px" }}
            href="https://github.com/radix-ui"
          >
            Support
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
}

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          <p className="leading-[1.4] text-mauve11">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavList;
