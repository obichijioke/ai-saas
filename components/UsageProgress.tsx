import React from "react";

const UsageProgress = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-gray-300 text-sm md:text-lg">AI outlines</p>
      <h3 className="text-xl md:text-2xl mb-2">
        20 out of 100 used this month
      </h3>
      <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-5 bg-blue-600 rounded-full dark:bg-blue-500"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
};

export default UsageProgress;
