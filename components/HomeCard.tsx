import { LucideIcon, MoreVertical } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cn } from "../lib/utils";

interface HomeCardProps {
  title: string;
  image: string;
  Icon: LucideIcon;
  iconColor?: string;
}

const HomeCard = ({ title, image, Icon, iconColor }: HomeCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden w-full shadow-md ">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="overflow-hidden w-full cursor-pointer"
      />
      <div className="p-2 lg:py-5 md:px-4 flex justify-between items-center">
        <div className="flex justify-start gap-3 items-center cursor-pointer">
          <Icon className={cn("w-4 h-4 lg:w-6 lg:h-6", iconColor)} />
          <span className="text-xs lg:text-sm">{title}</span>
        </div>
        <MoreVertical className="text-xs lg:text-base text-gray-400 w-4 h-4 lg:w-6 lg:h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default HomeCard;
