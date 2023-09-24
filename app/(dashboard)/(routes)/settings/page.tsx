import { Heading } from "@/components/Heading";
import { SubcriptionButton } from "@/components/subscriptionButtton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const Settingspage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings and preferences."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are subscribed to the Pro plan."
            : "You are not subscribed to the Pro plan."}
        </div>
        <SubcriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default Settingspage;
