import React from "react";

const UsageProgress = () => {
  return (
    <div className="w-full flex flex-col gap-1 lg:gap-2">
      <p className="text-gray-400 text-xs lg:text-sm">AI outlines</p>
      <h3 className="text-base font-semibold lg:text-lg">
        20 out of 100 used this month
      </h3>
      <div className="w-full h-3 lg:h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-3 lg:h-5 bg-gradient-to-r from-[#0076FE] to-[#00D372] rounded-full dark:bg-blue-500"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
};

export default UsageProgress;
