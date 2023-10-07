import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const PopularToolsCard = () => {
  return (
    <div className="w-full bg-white rounded-xl p-4 lg:p-8">
      <Image src={"/referral.svg"} alt="" width={78} height={78} />
      <h3 className="text-base lg:text-xl font-semibold my-3">
        Content Generator
      </h3>
      <p className="text-xs lg:text-sm text-gray-400 mb-5">
        Create a blog post from scratch using drag-and-drop headlines and
        images.
      </p>
      <Button variant="premium" className="w-full">
        Try now
      </Button>
    </div>
  );
};

export default PopularToolsCard;
