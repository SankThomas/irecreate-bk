import React from "react";
import Image from "next/image";
import phone from "@/images/phone.webp";
import Download from "./download";

export default function Mobile() {
  return (
    <>
      <section className="bg-[#EAE2D2] py-20 px-4 md:mt-10">
        <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <article>
            <Image
              src={phone}
              width={400}
              height={100}
              alt="Save $$$ With offers on demand"
              className="block mx-auto md:-mt-40"
            />
          </article>

          <article>
            <h2 className="text-3xl lg:text-5xl mb-8">
              Save $$$
              <span className="block">With offers on demand</span>
            </h2>

            <Download />

            <p className="mt-8 text-sm">
              Apple and the Apple logo are trademarks of Apple Inc., registered
              in the U.S. and other countries. App Store is a service mark of
              Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
            </p>
          </article>
        </div>
      </section>

      <div className="bg-[#502215] p-4 text-white text-center text-sm mb-20">
        TM & Copyright 2023 Burger King Corporation. All Rights Reserved. | Do
        Not Sell Or Share My Personal Information
      </div>
    </>
  );
}
