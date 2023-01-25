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

  const inputRef = React.useRef<HTMLInputElement>(null);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-[38px] justify-center items-center">
        <div className="max-w-[690px] flex flex-col justify-center items-center text-center">
          <img
            className="w-[360px] relative sm:top-[-40px]"
            src={introduction}
            alt=""
          />

          <div className="flex flex-col text-center gap-[30px]">
            <h1 className="text-white text-3xl sm:text-[44px]">
              You’re just one introduction away...
            </h1>

            <p className="text-white opacity-60 text-lg sm:text-2xl">
              ...from landing the next life-changing job, hiring a superstar, or
              capitalizing on your network.
            </p>
          </div>
        </div>

        {mailSent ? (
          <div className="gradientLightBlue p-[1px] rounded-[10px]">
            <div className="bg-[#060a1b] rounded-[10px]">
              <div className="gradientBlue rounded-[10px] py-[30px] xs:py-10 px-[30px] sm:px-[50px] flex flex-col gap-[30px]">
                <p className="flex sm:flex-row flex-col items-center justify-center text-center gap-2.5 font-medium">
                  <BiCheckCircle size="20" />
                  Hooray! You're in the whitelist! What's next?
                </p>
                <div className="flex justify-center sm:flex-row flex-col items-center gap-2.5">
                  <Button className="gradientLightBlue hover:text-[#141829] active:text-white sm:w-[200px] w-full h-[50px] rounded-[5px] font-medium text-sm flex flex-row justify-center items-center gap-[5px]">
                    <BiPyramid size="20" /> Explore 600 + Jobs
                  </Button>

                  <p className="text-white opacity-30">or</p>

                  <Button className="gradientOrange  text-[#141829] font-medium text-sm sm:w-[200px] w-full h-[50px] rounded-[5px] flex flex-row justify-center items-center gap-[5px]">
                    <Crystal />
                    Mint our Genesis NFT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="gradientLightBlue p-[1px] flex flex-row w-full max-w-[540px] rounded-[10px]">
            <div
              onClick={(e) => {
                e.preventDefault();
                inputRef.current?.focus();
              }}
              className="rounded-l-[10px] h-[70px] min-w-[200px] sm:min-w-[320px] w-full bg-[rgb(28,31,43)] px-5 py-[25px] flex flex-row items-center gap-2.5"
            >
              <FiMail size="20" className="min-w-[20px]" />
              <input
                ref={inputRef}
                className="text-sm sm:text-lg overflow-scroll text-white bg-transparent placeholder:text-white placeholder:opacity-30 placeholder:font-medium"
                placeholder="Type your email..."
              />
            </div>

            <div className="w-full h-full">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setMailSent(true);
                }}
                className="gradientLightBlue hover:text-[#141829] active:text-white rounded-r-[10px] text-sm sm:text-lg w-full h-full flex justify-center items-center"
              >
                Join the waitlist
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-col mt-[30px] sm:mt-[70px] gap-4 sm:gap-[32px] text-center">
          <p className="text-base text-white opacity-30">
            They hire smarter on Intropia:
          </p>
          <div className="flex flex-row gap-[40px] flex-wrap justify-center">
            <img
              src={p2p}
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/cl6m45dgj02540gldee6k68dw"
                )
              }
            />
            <img
              src={binaryx}
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/clbmaocxb0006l3084zfp992h"
                )
              }
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
            />
            <img
              src={underpay}
              onClick={() =>
                openInNewTab(
                  "https://app.intropia.io/organization/cld90o11t0000ms08feoxfkyy"
                )
              }
              className="w-[132px] sm:w-[180px] h-[42px] sm:h-[60px] cursor-pointer"
            />
            <img
              src={coinspaid}
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
            <div
              className="socialCard"
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
            </div>

            <div
              className="socialCard"
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
            </div>

            <div
              className="socialCard"
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
            </div>

            <div
              className="socialCard"
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
            </div>

            <div
              className="socialCard"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://tr3butor.notion.site");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={notion}
                alt="notion"
              />
              <p className="text-base">Notion</p>
            </div>

            <div
              className="socialCard"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://www.linkedin.com/company/intropia/");
              }}
            >
              <img
                className="rounded-[10px] w-[40px] h-[40px]"
                src={linked}
                alt="linked"
              />
              <p className="text-base">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
