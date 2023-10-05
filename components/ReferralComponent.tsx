import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const ReferralComponent = () => {
  return (
    <div className="w-full">
      <Image src={"/referral.svg"} alt="" width={78} height={78} />
      <p className="">EARN 20%</p>
      <h3 className="">Recurring Commission Forever</h3>
      <p className="">
        Earn 20% recurring (that’s forever!) commission for referring friends to
        GrowthBar. You’ll get email alerts when your friends sign up.
      </p>
      <Button>Refer now</Button>
    </div>
  );
};
