import React from "react";
import Button from "../button/Button";
import DropdownHover from "../dropdownHover/DropdownHover";
import Toggle from "../toggle/Toggle";

const Header = () => {
  return (
    <div className="w-full bg-white py-3 border-[rgba(0, 0, 0, 0.1)] border-b">
      <div className="max-w-[1224px] gap-3 px-5 flex flex-row flex-wrap items-center justify-between">
        <div className="w-[84px] h-[20px] bg-black"></div>

        <div className="flex flex-row items-center gap-[40px] flex-wrap">
          <DropdownHover hoverTitle="Products">
            <div className="absolute shadow-3xl w-[920px] h-[272px] bg-white rounded-2xl">
              HAS
            </div>
          </DropdownHover>

          <DropdownHover hoverTitle="Case studies"></DropdownHover>

          <DropdownHover hoverTitle="Company"></DropdownHover>

          <DropdownHover hoverTitle="News"></DropdownHover>

          <div className="h-[24px] w-[1px] bg-gray-900 opacity-20" />

          <Toggle
            defaultChecked={document
              .querySelector("html")
              ?.classList.contains("dark")}
            onChange={() => {
              const html = document.querySelector("html");
              if (html?.classList.contains("dark")) {
                window.localStorage.setItem("color-theme", "light");
                html.classList.remove("dark");
              } else {
                window.localStorage.setItem("color-theme", "dark");
                html?.classList.add("dark");
              }
            }}
          />
        </div>

        <div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
