import React, { useState } from "react";

import introduction from "assets/png/introduction.png";
import { ReactComponent as Crystal } from "assets/svg/crystal.svg";
import p2p from "assets/png/p2p.png";
import binaryx from "assets/png/binaryx.png";
import underpay from "assets/png/underpay.png";
import coinspaid from "assets/png/coinspaid.png";
import twitter from "assets/jpg/twitter.jpg";
import discord from "assets/jpg/discord.jpg";
import substack from "assets/jpg/substack.jpg";
import medium from "assets/jpg/medium.jpg";
import notion from "assets/jpg/notion.jpg";
import linked from "assets/jpg/linked.jpg";

import { BiCheckCircle, BiPyramid } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

import Button from "components/button/Button";

const Introduction: React.FC = () => {
  const [mailSent, setMailSent] = useState<boolean>(false);

  const [pending, setPending] = useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    setPending(true);

    fetch(`https://rest.intropia.io/api/whitelist/create`, {
      method: "POST",
      body: JSON.stringify({
        email: inputRef.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.REACT_APP_BASIC_AUTH_CODE}`,
      },
    })
      .then((res) => setMailSent(true))
      .finally(() => setPending(false));
  };
  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-[30px] sm:gap-[38px] justify-center items-center">
        <div className="max-w-[690px] flex flex-col justify-center items-center text-center">
          <img
            className="w-[360px] relative sm:top-[-40px] pb-5 sm:pb-0"
            src={introduction}
            alt=""
          />

          <div className="flex flex-col text-center gap-2 sm:gap-[30px]">
            <h1 className="text-white text-3xl sm:text-[44px]">
              You’re just one{" "}
              <span className="whitespace-nowrap">introduction away...</span>
            </h1>

            <h2 className="text-white opacity-60 text-lg sm:text-2xl">
              get a job, capitalize your network,{" "}
              <span className="whitespace-nowrap">hire best talent</span>
            </h2>
          </div>
        </div>

        {mailSent ? (
          <div className="gradientLightBlue p-[1px] rounded-[10px] w-full sm:w-auto ">
            <div className="bg-[#060a1b] rounded-[10px]">
              <div className="gradientBlue rounded-[10px] py-[30px] xs:py-10 px-[30px] sm:px-[50px] flex flex-col gap-[30px]">
                <p className="flex sm:flex-row flex-col items-center justify-center text-center gap-0 sm:gap-2.5 font-medium">
                  <BiCheckCircle className="sm:mb-0 mb-2.5" size="20" />
                  You’ve just been whitelisted!{" "}
                  <span className="whitespace-nowrap">Take action now:</span>
                </p>
                <div className="flex justify-center sm:flex-row flex-col items-center gap-2.5">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      openInNewTab("https://app.intropia.io");
                    }}
                    id="landing-wl-app"
                    className="gradientLightBlue hover:text-[#141829] active:text-white sm:w-[200px] w-full h-[50px] rounded-[5px] font-medium text-sm flex flex-row justify-center items-center gap-[5px]"
                  >
                    <BiPyramid size="20" />
                    Explore 600 + Jobs
                  </Button>

                  <p className="text-white opacity-30">or</p>

                  <Button
                    id="landing-wl-genesis"
                    onClick={(e) => {
                      e.preventDefault();
                      openInNewTab("https://genesis.intropia.io/");
                    }}
                    className="gradientOrange text-[#141829] font-medium text-sm sm:w-[200px] w-full h-[50px] rounded-[5px] flex flex-row justify-center items-center gap-[5px]"
                  >
                    <Crystal />
                    Mint Genesis NFT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmitHandler}
            ref={formRef}
            className="gradientLightBlue p-[1px] flex flex-row w-full max-w-[540px] rounded-[10px]"
          >
            <div className="bg-[#060a1b] rounded-l-[10px] min-w-[200px] sm:min-w-[320px] w-full">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  inputRef.current?.focus();
                }}
                className="rounded-l-[10px] h-[70px] w-full inputBg px-5 py-[25px] flex flex-row items-center gap-2.5"
              >
                <FiMail size="20" className="min-w-[20px]" />
                <input
                  ref={inputRef}
                  type="email"
                  required
                  className="w-full text-sm sm:text-lg overflow-scroll text-white bg-transparent placeholder:text-white placeholder:opacity-30 placeholder:font-medium"
                  placeholder="Type your email..."
                />
              </div>
            </div>

            <div className="w-full h-full">
              <Button
                disabled={pending}
                type="submit"
                className="gradientLightBlue font-medium hover:text-[#141829] active:text-white rounded-r-[10px] text-sm sm:text-lg w-full h-full flex justify-center items-center"
              >
                Join the whitelist
              </Button>
            </div>
          </form>
        )}

        <div className="flex flex-col mt-[30px] sm:mt-[70px] gap-4 sm:gap-[32px] text-center">
          <p className="text-base text-white opacity-30">
            They hire smarter on intropia:
          </p>
          <div className="flex flex-row gap-[40px] flex-wrap justify-center">
            <img
              src={p2p}
              alt="p2p"
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/cl6m45dgj02540gldee6k68dw"
                )
              }
            />
            <img
              src={binaryx}
              alt="binaryx"
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/clbmaocxb0006l3084zfp992h"
                )
              }
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
            />
            <img
              src={underpay}
              alt="underpay"
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/cld90o11t0000ms08feoxfkyy"
                )
              }
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
            />
            <img
              src={coinspaid}
              alt="coinspaid"
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/cl5if5kn1027509jy5kdon3bw"
                )
              }
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col max-w-[490px] my-5 sm:my-[70px] gap-4 sm:gap-[32px] text-center">
          <p className="text-base text-white opacity-30">
            Learn more and contribute:
          </p>

          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <Button
              className="socialCard"
              id="landing-soc-twitter"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://twitter.com/intropia");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={twitter}
                alt="twitter"
              />
              <p className="text-base">Twitter</p>
            </Button>

            <Button
              className="socialCard"
              id="landing-soc-discord"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://discord.gg/intropia");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={discord}
                alt="discord"
              />
              <p className="text-base">Discord</p>
            </Button>

            <Button
              className="socialCard"
              id="landing-soc-substack"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://intropia.substack.com");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={substack}
                alt="substack"
              />
              <p className="text-base">Substack</p>
            </Button>

            <Button
              className="socialCard"
              id="landing-soc-medium"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://medium.com/@intropia");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={medium}
                alt="medium"
              />
              <p className="text-base">Medium</p>
            </Button>

            <Button
              className="socialCard"
              id="landing-soc-notion"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://intropia.notion.site");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={notion}
                alt="notion"
              />
              <p className="text-base">Notion</p>
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://www.linkedin.com/company/intropia/");
              }}
              className="socialCard"
              id="landing-soc-linkedin"
            >
                <img
                  className="rounded-[10px] w-[40px] h-[40px]"
                  src={linked}
                  alt="linked"
                />
                <p className="text-base">LinkedIn</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
