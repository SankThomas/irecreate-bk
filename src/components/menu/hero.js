"use client";

import React, { useState } from "react";
import Modal from "./modal";
import Nearby from "./nearby";
import Favorites from "./favorites";
import Recents from "./recents";

const components = [
  {
    name: <Nearby />,
    button: "Nearby",
  },
  {
    name: <Favorites />,
    button: "Favorites",
  },
  {
    name: <Recents />,
    button: "Recents",
  },
];

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [items] = useState(components);
  const [value, setValue] = useState(2);

  const { name } = components[value];

  return (
    <>
      <div className="max-width pt-20 mb-28 px-4">
        <ul className="flex items-center justify-center text-center">
          <li className="flex-1">
            <button className="bg-[#502215] text-white py-2 px-6 w-full border-2 border-[#502215]">
              Pick Up
            </button>
          </li>
          <li className="flex-1">
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-[#502215] w-full py-2 px-6"
            >
              Delivery
            </button>
          </li>
        </ul>

        {showModal && <Modal setShowModal={setShowModal} />}

        <form className="my-8">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Your Address"
            className="w-full py-3 px-6 rounded-lg placeholder-[#502215] text-[#502215] bg-white border border-slate-400"
          />
        </form>

        <ul className="flex items-center justify-evenly">
          {items.map((button, index) => (
            <React.Fragment key={index}>
              <li
                onClick={() => setValue(index)}
                className={`cursor-pointer border-b-2 border-slate-400 w-full text-center py-2 ${
                  value === index && "border-[#d92200]"
                }`}
              >
                <button>{button.button}</button>
              </li>
            </React.Fragment>
          ))}
        </ul>

        <div>{name}</div>
      </div>
    </>
  );
}
