import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin" size={40} />;
    </div>
  );
}
