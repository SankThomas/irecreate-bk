import React from "react";
import { BsMap } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className="bg-orange p-4 fixed w-full">
        <div className="max-width flex items-center justify-between text-white">
          <div></div>

          <div>
            <h2 className="text-2xl">Locations</h2>
          </div>

          <button>
            <BsMap />
          </button>
        </div>
      </header>
    </>
  );
}
