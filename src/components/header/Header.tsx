import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as LinearLogo } from "assets/svg/linearLogo.svg";

import Button from "components/button/Button";
import { BiLinkExternal } from "react-icons/bi";
import { openInNewTab } from "helpers/common";
import { useCallback } from "react";

const Header = () => {
  const openApp = useCallback((e: any) => {
    e.preventDefault();
    openInNewTab("https://app.intropia.io/");
  }, []);

  return (
    <div className="w-full flex justify-center py-4">
      <div className="container flex flex-row justify-between">
        <div
          className="group flex items-center justify-center bg-[#141829] w-[160px] h-[50px] rounded-[5px] relative"
        >
          <Logo className="w-[100px]" />
          <LinearLogo className="absolute w-[100px] opacity-0 group-hover:opacity-100 duration-300" />
        </div>

        <div>
          <Button
            onClick={openApp}
            className="gradientOrange whitespace-nowrap rounded-[5px] min-h-[50px] text-[#141829] font-medium text-sm py-2.5 px-[30px] flex flex-row items-center gap-1"
          >
            Explore 600+ jobs <BiLinkExternal size="14" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
