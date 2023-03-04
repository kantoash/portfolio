'use client'

import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { Social } from "../typing";

interface Props {
  socials: Social[];
}

function Header({ socials }: Props) {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto top-0 px-5 py-2 z-50 sticky">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex items-center flex-row"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.25,
        }}
        className="flex flex-row items-center space-x-2 cursor-pointer"
      >
        <Link href={"#contact"} className="uppercase font-semibold text-sm text-gray-500 hidden md:inline-flex">
          Get In Touch
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
