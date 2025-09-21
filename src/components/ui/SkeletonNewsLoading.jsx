import React from "react";

const SkeletonNewsLoading = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-[Inter] animate-pulse">
      <div className="h-6 w-24 bg-gray-300 rounded mb-6"></div>
      <div className="h-10 bg-gray-300 rounded mb-4 w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2 w-1/2"></div>
      <div className="h-[300px] bg-gray-300 rounded mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export default SkeletonNewsLoading;
