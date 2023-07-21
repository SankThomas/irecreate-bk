import React from "react";
import { FaBars } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import Logo from "./logo";
// import Notice from "./notice";

export default function Header() {
  return (
    <>
      <header className="p-4 shadow fixed w-full bg-[#f5eadd] z-50">
        <div className="max-width flex items-center justify-between">
          <div>
            <button>
              <FaBars />
            </button>
          </div>

          <Logo />

          <ul className="flex items-center gap-4">
            <li>
              <button
                className="bg-orange text-white flex items-center gap-2 py-2
              px-4 rounded-full font-bold text-sm"
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                className="text-white flex items-center gap-2 py-2
              px-4 rounded-full font-bold text-sm bg-[#502215]"
              >
                <MdShoppingBag /> $0.00
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* <Notice /> */}
    </>
  );
}
