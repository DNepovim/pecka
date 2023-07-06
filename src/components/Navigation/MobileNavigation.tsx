import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import { NavigationItem } from "./Navigation";
import useOnClickOutside from "use-onclickoutside";
import Hamburger from "hamburger-react";

export const MobileNavigation: React.FC<{
  items: NavigationItem[];
  activeItem?: string;
}> = ({ items, activeItem }) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpened(false));

  return (
    <div className="flex items-center gap-8" ref={ref}>
      <ul
        className="bg-white absolute top-full right-0 m-0 py-0 pt-0 pb-2"
        style={{ transform: `translateX(${isOpened ? 0 : 100}%)` }}
        onClick={() => setIsOpened(false)}
      >
        {items.map((item) => (
          <li key={item.link}>
            <Link
              className="block py-2 px-4 text-xl"
              to={item.link}
              key={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Hamburger
        color="black"
        toggled={isOpened}
        onToggle={() => setIsOpened(!isOpened)}
      />
    </div>
  );
};
