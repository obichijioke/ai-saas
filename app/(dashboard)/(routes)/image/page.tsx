import { Heading } from "@/components/Heading";
import { MessageSquare } from "lucide-react";

const ImagePage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default ImagePage;
