import React from "react";
import { MdShoppingBag } from "react-icons/md";
import { GiScooter } from "react-icons/gi";
import Image from "next/image";
import hero from "@/images/hero.webp";

export default function Hero() {
  return (
    <>
      <section className="px-4 pt-20 pb-10 grid grid-cols-1 gap-8 md:grid-cols-3 items-center max-width">
        <article>
          <h1 className="text-4xl lg:text-5xl mb-8">Start your BK® order.</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <button className="bg-orange text-white flex items-center gap-2 py-3 px-5 rounded-full font-bold">
                <MdShoppingBag /> Order Pickup
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 border border-[#D62201] py-3 px-5 rounded-full text-[#D62201] font-bold">
                <GiScooter /> Order Delivery
              </button>
            </li>
          </ul>
        </article>

        <article className="md:col-span-2">
          <Image src={hero} width={800} height={600} alt="Burger" />
        </article>
      </section>
    </>
  );
}
