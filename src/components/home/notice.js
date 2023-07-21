import React from "react";
import Image from "next/image";
import royalPerks from "@/images/royal-perks.svg";

export default function Notice() {
  return (
    <>
      <div className="p-4 bg-[#502215]">
        <Image src={royalPerks} width={150} height={80} alt="royal perks" />
      </div>
    </>
  );
}
