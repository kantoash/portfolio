'use client'

import React from "react";
import BackGroundCircle from "./BackGroundCircle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { PageInfo } from "../typing";
import { urlFor } from "../lib/sanity.client";


interface Props {
  pageInfo: PageInfo;
}

function Hero({ pageInfo } : Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Ash`,
      "Code Lover n Manga Reader",
      "<LovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center  text-center overflow-hidden ">
      <BackGroundCircle />
      <Image
        className="relative rounded-full h-40 w-40 mx-auto object-fill"
        src={urlFor(pageInfo.HeroImage).url()}
        height={100}
        width={100}
        alt=""
      />
      <div className="text-gray-500 ">
        <h2 className="text-4xl pb-2 uppercase tracking-[12px]">
            <p>Full Stack Dev</p>
            <p className="text-gray-300">web3 Dev</p>
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-5">
          <span>{text}</span>
          <Cursor cursorStyle="_" cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
