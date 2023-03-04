"use client"

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../lib/sanity.client";



interface Props {
  pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <div className=" flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-16">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
        </h3>
        <motion.img 
        initial={{ 
            x: -250,
            opacity: 0,}}
        transition={{ duration:1.5, }}
        whileInView={{ opacity:1, x: 0}}
        src={urlFor(pageInfo?.proficePic).url()}
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />     
         <div className="space-y-2 px-0 md:px-10">
            <h4 className="text-4xl font-semibold pb-5">
                About My <span className="underline decoration-[#F7AB0A]/50">Self</span>
            </h4>
            <h3 className="italic text-2xl">Short n Simple</h3>
            <p className="text-md capitalize">{pageInfo?.backgroundInfomation}</p>
         </div>
    </div>
  );
}
