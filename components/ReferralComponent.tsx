import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const ReferralComponent = () => {
  return (
    <div className="w-full">
      <Image src={"/referral.svg"} alt="" width={78} height={78} />
      <p className="my-2 text-xs lg:text-xs font-medium text-[#0076FE]">
        EARN 20%
      </p>
      <h3 className="font-semibold text-lg">Recurring Commission Forever</h3>
      <p className="my-3 text-sm lg:text-base text-gray-500">
        Earn 20% recurring (that’s forever!) commission for referring friends to
        GrowthBar. You’ll get email alerts when your friends sign up.
      </p>
      <Button variant="premium">Refer now</Button>
    </div>
  );
};
