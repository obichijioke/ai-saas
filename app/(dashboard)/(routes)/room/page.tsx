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
import Editor from "@/components/editor/Editor";
import UseEditor from "@/components/UseEditor";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
  defaultClassNames,
} from "react-dropzone-uploader";

const ContentPage = () => {
  const [video, setVideo] = useState<string>();
  const router = useRouter();
  const proModel = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const getUploadParams: IDropzoneProps["getUploadParams"] = () => ({
    url: "https://httpbin.org/post",
  });

  const handleSubmit: IDropzoneProps["onSubmit"] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/image", values);
      //console.log(response.data);
      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };

  const Layout = ({
    input,
    previews,
    submitButton,
    dropzoneProps,
    files,
    extra: { maxFiles },
  }: ILayoutProps) => {
    return (
      <div className="border-2 border-gray-200 p-5 rounded-xl border-dashed">
        {previews}

        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

        {files.length > 0 && submitButton}
      </div>
    );
  };

  return (
    <div>
      <Heading title="Room Design" description="Redesign your room using AI" />
      <div className="px-4 lg:px-8">
        <div className="w-[500px]">
          <Dropzone
            getUploadParams={getUploadParams}
            LayoutComponent={Layout}
            onSubmit={handleSubmit}
            addClassNames={{ dropzone: "overflow-hidden" }}
            classNames={{
              inputLabelWithFiles: "",
              dropzone: "p-5 rounded-lg border",
              inputLabel: "w-full cursor-pointer flex justify-center",
            }}
            inputContent="Add Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
