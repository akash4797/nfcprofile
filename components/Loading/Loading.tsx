import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-white">
      <AiOutlineLoading3Quarters className="animate-spin" size={40} />;
    </div>
  );
}
