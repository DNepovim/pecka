import React, { useCallback, useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export interface NavigationItem {
  title: string;
  link: string;
}

export const Navigation: React.FC<{
  items: NavigationItem[];
}> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | undefined>();
  const scrollPosition = useScrollPosition();
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (
        document.body.scrollHeight - (scrollPosition + window.innerHeight) <
        100
      ) {
        setActiveItem(items[items.length - 1].link);
        return;
      }
      setActiveItem(
        items.slice(0, -1).reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link.substring(2));
          if (!block) {
            return;
          }
          const { top } = block.getBoundingClientRect();
          return top < 100 ? item.link : acc;
        }, undefined)
      );
    },
    [items, scrollPosition]
  );
  useEffect(() => {
    onScrollHandler(scrollPosition);
  }, [onScrollHandler, scrollPosition]);
  return (
    <div className="fixed z-20 top-0 inset-x-0 w-full bg-white py-2">
      <nav className="flex items-center w-full max-w-container md:px-4 px-2 mx-auto">
        <div className="flex items-center h-full my-0 mr-auto ml-0">
          <Link
            className="flex m-0 text-4xl transition-opacity duration-500"
            to="#uvod"
            style={{ opacity: activeItem ? 1 : 0 }}
          >
            <StaticImage src="../../images/broskev.svg" alt="" height={25} />
          </Link>
        </div>
        <div className="ml-auto">
          <span className="max-lg:hidden">
            <DesktopNavigation items={items} activeItem={activeItem} />
          </span>
          <span className="lg:hidden">
            <MobileNavigation items={items} activeItem={activeItem} />
          </span>
        </div>
      </nav>
    </div>
  );
};
