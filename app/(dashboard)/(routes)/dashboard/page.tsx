"use client";

import { Card } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import HomeCard from "@/components/HomeCard";
import { Heading } from "@/components/Heading";
import UsageProgress from "@/components/UsageProgress";
import { ReferralComponent } from "@/components/ReferralComponent";

const tools = [
  {
    title: "Conversation",
    icon: MessageSquare,
    image: "/test-image.png",
    color: "text-violet-500",
    href: "/conversation",
  },
  {
    title: "Music Generation",
    icon: Music,
    image: "/test-image.png",
    color: "text-emerald-500",
    href: "/music",
  },
  {
    title: "Image Generation",
    icon: ImageIcon,
    image: "/test-image.png",
    color: "text-pink-700",
    href: "/image",
  },
];

const DashbordPage = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="">
      <Heading title="Home" />
      <div className="p-4 md:p-6 lg:p-10 bg-white rounded-xl shadow-sm my-3">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">{`Hey ${user?.firstName}`}</h2>
          <p className="text-muted-foreground font-light text-sm md:text-base">
            Chat with the smartest AI - Experience the power of AI
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <div
              className="w-full"
              key={tool.href}
              onClick={() => router.push(tool.href)}
            >
              <HomeCard
                title={tool.title}
                image={tool.image}
                Icon={tool.icon}
                iconColor={tool.color}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-3 py-4">
        <h2 className="text-2xl md:text-3xl font-bold">Your Usage</h2>
        <div className="p-4 md:p-6 lg:px-10 flex md:flex-row flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm w-full md:w-3/5 px-2 lg:p-8 flex flex-col gap-5">
            <UsageProgress />
            <UsageProgress />
            <UsageProgress />
          </div>
          <div className="bg-white rounded-xl shadow-sm w-full md:w-2/5 h-64 px-2 lg:p-8">
            <ReferralComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashbordPage;
