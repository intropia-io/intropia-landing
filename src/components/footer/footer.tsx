import { BiLinkExternal } from "react-icons/bi";

export const constants = {
  COOKIE_URL: "https://tr3butor.notion.site/2631d014ac224f238f31a48ec58f2dc6",
  PRIVACY_URL: "https://tr3butor.notion.site/2254728e540d40b982f91157adf82b40",
  TERMS_URL: "https://tr3butor.notion.site/6d643993015c47e9a3e5f8c4ec81777f",
};

const Footer = () => {
  return (
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
  );
};

export default Footer;
