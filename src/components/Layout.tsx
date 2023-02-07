import { ReactComponent as LinearLogo } from "assets/svg/linearLogo.svg";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import Button from "components/button/Button";
import { openInNewTab } from "helpers/common";
import React, { useCallback } from "react";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  children?: React.ReactNode;
};

export const constants = {
  COOKIE_URL: "https://intropia.notion.site/2631d014ac224f238f31a48ec58f2dc6",
  PRIVACY_URL: "https://intropia.notion.site/2254728e540d40b982f91157adf82b40",
  TERMS_URL: "https://intropia.notion.site/6d643993015c47e9a3e5f8c4ec81777f",
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <div className="w-full flex justify-center py-5 sm:py-[40px]">
        <div className="container flex flex-row justify-between">
          <div className="group flex items-center justify-center bg-[#141829] w-[160px] h-[50px] rounded-[5px] relative">
            <Logo className="w-[100px]" />
            <LinearLogo className="absolute w-[100px] opacity-0 group-hover:opacity-100 duration-300" />
          </div>

          <div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://app.intropia.io/"
              id="landing-header-app"
              className="gradientOrange whitespace-nowrap rounded-[5px] min-h-[50px] text-[#141829] font-medium text-sm py-2.5 px-[30px] flex flex-row items-center gap-1"
            >
              Explore 800+ jobs <BiLinkExternal size="14" />
            </a>
          </div>
        </div>
      </div>
      {children}
      <div className="flex w-full justify-center">
        <div className="container flex flex-row flex-wrap gap-[30px] justify-center py-10">
          <a
            target={"_blank"}
            id="app-soc-footer-cookie"
            rel="noreferrer"
            href={constants.COOKIE_URL}
            className="footerLink"
          >
            cookie policy <BiLinkExternal size={12} />
          </a>
          <a
            target={"_blank"}
            id="app-soc-footer-privacy"
            rel="noreferrer"
            href={constants.PRIVACY_URL}
            className="footerLink"
          >
            privacy policy <BiLinkExternal size={12} />
          </a>
          <a
            target={"_blank"}
            id="app-soc-footer-terms"
            rel="noreferrer"
            href={constants.TERMS_URL}
            className="footerLink"
          >
            terms of service <BiLinkExternal size={12} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Layout;
