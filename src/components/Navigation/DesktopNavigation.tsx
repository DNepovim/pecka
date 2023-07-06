import React, { useEffect, useRef, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { Link } from "gatsby";
import { NavigationItem } from "./Navigation";

interface UnderlineProps {
  left: number;
  width: number;
}

const getUnderlineCor = (
  container: HTMLElement | null,
  item: Element | null
): UnderlineProps | undefined => {
  const navListRect = container?.getBoundingClientRect();
  const activeItemRect = item?.getBoundingClientRect();

  if (!navListRect || !activeItemRect) {
    return;
  }

  return {
    left: activeItemRect.left - navListRect.left,
    width: activeItemRect.width,
  };
};

export const DesktopNavigation: React.FC<{
  items: NavigationItem[];
  activeItem?: string;
}> = ({ items, activeItem }) => {
  const [activeItemCor, setActiveItemCor] = useState<
    UnderlineProps | undefined
  >();
  const scrollPosition = useScrollPosition();
  const navListRef = useRef<HTMLUListElement | null>(null);

  const fallbackedActiveItem = activeItem ?? items[0].link;

  useEffect(() => {
    const activeNavItem = document.querySelector(
      `a[href$='${fallbackedActiveItem}']`
    );
    setActiveItemCor(getUnderlineCor(navListRef.current, activeNavItem));
  }, [scrollPosition]);

  return (
    <ul className="flex -mx-2 align-center relative" ref={navListRef}>
      {items.map((item) => (
        <>
          <li key={item.link}>
            <Link
              className={`block px-2 text-md transition-colors hover:text-orange-first ${
                activeItem === item.link ? "text-orange-first" : ""
              }`}
              to={item.link}
              key={item.link}
            >
              {item.title}
            </Link>
          </li>
        </>
      ))}
      {activeItemCor && (
        <div
          className="absolute -bottom-2 h-[4px] bg-orange-first transition-[width_500ms,left_500ms] rounded-sm"
          style={activeItemCor}
        />
      )}
    </ul>
  );
};
