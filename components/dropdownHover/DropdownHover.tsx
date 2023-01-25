import React from "react";

import { MdArrowDropDown } from "react-icons/md";

interface DropdownHoverProps {
  hoverTitle: string;
  children?: React.ReactNode;
}

const DropdownHover: React.FC<DropdownHoverProps> = ({
  hoverTitle,
  children,
}) => {
  return (
    <ul className="cursor-default group link-underline link-underline-black">
      <li className="flex flex-row py-2">
        {hoverTitle}
        <MdArrowDropDown
          className="text-gray-900 group-hover:rotate-180 transition duration-300"
          size="24"
        />
      </li>
      <li className="invisible group-hover:visible absolute h-max w-max">
        {children}
      </li>
    </ul>
  );
};

export default DropdownHover;
