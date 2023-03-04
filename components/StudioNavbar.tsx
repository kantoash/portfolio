import Link from "next/link";
import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex flex-row space-x-3 items-center justify-between p-5">
        <Link href="/">
          <div className="flex flex-row text-[#F7AB0A] items-center space-x-1.5  ">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A]" />
            <h3>Go To Website</h3>
          </div>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
      
    </div>
  );
}

export default StudioNavbar;
