"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";

interface SubscriptionButtonProps {
  isPro: boolean;
}
export const SubcriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button onClick={onClick} disabled={loading}>
      {isPro ? "Manage Subscription" : "Upgrade to Pro"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
