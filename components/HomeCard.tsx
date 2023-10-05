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
    <div className="rounded-lg overflow-hidden w-full shadow-md">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="overflow-hidden w-full"
      />
      <div className="px-2 py-4 md:py-5 md:px-4 flex justify-between items-center">
        <div className="flex justify-start gap-3 items-center">
          <Icon className={cn("w-6 h-6", iconColor)} />
          <span>{title}</span>
        </div>
        <MoreVertical className="text-gray-400" />
      </div>
    </div>
  );
};

export default HomeCard;
