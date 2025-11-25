import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

function NavList() {
  return (
    <NavigationMenu.Root className="relative z-10 hidden justify-end md:flex md:w-2xl">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group text-violet11 hover:bg-violet3 focus:shadow-violet7 flex items-center justify-between gap-0.5 rounded px-3 py-2.5 text-[15px] leading-none font-medium select-none hover:text-red-600 focus:shadow-none! focus:outline-none!">
            Home{" "}
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="data-[motion=from-end] :animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft absolute top-0 left-0 w-full bg-slate-50 sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="from-purple9 to-indigo9 focus:shadow-violet7 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-[25px] no-underline outline-none select-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                    <path d="M12 0H4V8H12V0Z"></path>
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    <span>
                      <img src="./wecan-electronics.svg" alt="logo" />
                    </span>
                    <div className="mt-4 mb-[7px] text-[18px] leading-[1.2] font-medium text-white">
                      Amin Prass
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Home of quality appliances delivered to your doorstep.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="" title="About Us">
                Learn about our mission and values
              </ListItem>

              <ListItem href="" title="Support">
                Get help and customer service assistance
              </ListItem>

              <ListItem href="" title="Careers">
                Join our team and explore new opportunities
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <a
              href="#"
              className="text-violet11 hover:bg-violet3 block rounded px-3 py-2 text-[15px] font-normal transition-colors hover:text-red-600!"
            >
              About
            </a>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/shop"
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block rounded px-3 py-2 text-[35px] leading-none font-normal no-underline select-none hover:text-red-600! focus:shadow-none! focus:outline-none!"
            style={{ fontSize: "15px" }}
          >
            Shop
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport className="data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn transition-[width,height]duration-300 sm:w-(--radix-navigation-menu-viewport relative mt-2.5 h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden rounded-md bg-white" />
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
