"use client";
import { useState } from "react";
import { Heading } from "@/components/Heading";
import { Edit, VideoIcon } from "lucide-react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Empty } from "@/components/ui/Empty";
import { Loader } from "@/components/Loader";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
import UseEditor from "@/components/UseEditor";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Editor from "@/components/editor/Editor";

const ContentPage = () => {
  const router = useRouter();
  const proModel = useProModal();

  return (
    <div>
      <Heading title="Content Creation" />
      <div className="flex gap-3 w-full">
        <div className="bg-white rounded-xl p-5 w-[66.3%]">
          <Image
            src={"/content-generator-icon.svg"}
            alt=""
            width={500}
            height={500}
            className="w-10 h-10"
          />
          <h3 className="text-base lg:text-xl font-semibold mt-3 mb-6  text-[#0D1B2E]">
            Generate Content
          </h3>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="text" className="mb-2 text-gray-500">
              Enter content prompt
            </Label>
            <Input
              type="text"
              id="text"
              className="focus-visible:ring-0 focus-visible:ring-transparent w-full"
              placeholder="How to walk a dog correctly"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-5">
            <Label htmlFor="text" className="mb-2 text-gray-500">
              Enter focus keywords (optional)
            </Label>
            <Input
              type="text"
              id="text"
              className="focus-visible:ring-0 focus-visible:ring-transparent w-full"
              placeholder="marketing, sales, etc."
            />
          </div>
          <Editor />
        </div>
        <div className="bg-white rounded-xl w-[33.3%]"></div>
      </div>
    </div>
  );
};

export default ContentPage;
