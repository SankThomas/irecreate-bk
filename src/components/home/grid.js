"use client";

import Image from "next/image";
import React, { useState } from "react";
import card1 from "@/images/card-1.webp";
import card2 from "@/images/card-2.webp";
import card3 from "@/images/card-3.webp";
import card4 from "@/images/card-4.webp";

const cards = [
  {
    image: card1,
    title: "You could win $3,000 every day!",
    desc: "Whole Lot-O Crowns is here. Every day, Royal Perks members get the chance to turn Crowns into cash in the BK® App. NO PURCH NEC. 50 U.S. (excl. AK & HI) age 18+ (19+ AL/NE). Acct regis. & 7-day prior purchase req'd. Rules & free entry method at www.bk.com/wholelotorules",
    link: "See terms",
    button: "Enter Now",
  },
  {
    image: card2,
    title: "$3 OFF any $15+ BK® delivery order!",
    desc: "Save time and money with $3 OFF any $15+ BK® delivery order. Now through 7/31! At part. U.S. rest. Fees and higher prices apply.",
    link: "See terms",
    button: "Order Delivery",
  },
  {
    image: card3,
    title: "Join the team!",
    desc: "At BK®, you can find work-life balance, flexibility and career growth, because you deserve to live life your way. It's not just a job, it's a career opportunity! Hiring decisions are determined solely by the franchisee who independently owns and operates each restaurant.",
    link: "",
    button: "Apply Today",
  },
  {
    image: card4,
    title: "Tasty Offers",
    desc: "Join Royal Perks to save with offers created just for you.",
    link: "See terms",
    button: "Join Now",
  },
];

export default function Grid() {
  const [card] = useState(cards);

  return (
    <>
      <div className="max-width py-20 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {card.map((c, index) => (
            <article key={index} className="bg-white rounded-lg shadow">
              <Image
                src={c.image}
                width={600}
                height={300}
                alt={c.title}
                className="rounded-t-lg"
              />

              <article className="p-4">
                <h2 className="lg:text-2xl mb-8">{c.title}</h2>
                <p className="text-sm mb-4">{c.desc}</p>
                <button className="underline mb-8 text-sm">{c.link}</button>

                <button className="block ml-auto border border-[#D62201] py-3 px-5 rounded-full text-[#D62201] font-bold text-sm">
                  {c.button}
                </button>
              </article>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
