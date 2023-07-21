"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsFillTagFill } from "react-icons/bs";
import image1 from "@/images/offers/image-1.webp";
import image2 from "@/images/offers/image-2.webp";
import image3 from "@/images/offers/image-3.webp";
import image4 from "@/images/offers/image-4.webp";

const offers = [
  {
    image: image1,
    title: "$7 Small Italian BK Royal Crispy Chicken Sandwich Meal",
    desc: "Italian Royal Crispy Chicken, Small Fries, Small Soft Drink",
    delivery: false,
  },
  {
    image: image2,
    title: "$11.99 Snack Bundle",
    desc: "8 Pc. Chicken Nuggets, 8 Pc. Fiery Nuggets, 9 Pc. Chicken Fries, LG Fries, LG Onion Rings",
    delivery: false,
  },
  {
    image: image3,
    title: "$3 Off Purchase of $15 or more",
    desc: "$3 Off Purchase of $15 or more",
    delivery: true,
  },
  {
    image: image4,
    title: "Free Any Size Fries with Purchase*",
    desc: "Free Any Size Fries with Purchase*",
    delivery: false,
  },
];

export default function Foods() {
  const [cards] = useState(offers);

  return (
    <>
      <div className="max-width pt-20 mb-28 px-4">
        <article className="bg-white p-4 rounded-lg flex items-center gap-4">
          <button className="bg-orange p-2 rounded-full">
            <BsFillTagFill className="text-white" />
          </button>{" "}
          <h1 className="text-base">Have a Promo Code?</h1>
        </article>

        <div className="grid grid-cols-1 gap-4 mt-4">
          {offers.map((offer, index) => (
            <article
              key={index}
              className="bg-white p-4 rounded-lg flex flex-col md:flex-row text-center md:text-left items-center gap-4"
            >
              <Image
                src={offer.image}
                width={150}
                height={150}
                alt={offer.title}
              />

              <div>
                <h2 className="text-xl">{offer.title}</h2>
                <p className="text-sm mt-2">{offer.desc}</p>
                {offer.delivery ? (
                  <button className="bg-transparent border border-[#502215] py-1 px-4 rounded-full text-[#502215] text-sm mt-4">
                    Delivery only
                  </button>
                ) : (
                  <button className="bg-[#502215] py-1 px-4 rounded-full text-white text-sm mt-4">
                    Pick up only
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
