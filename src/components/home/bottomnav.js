import Link from "next/link";
import React from "react";
import { GoHomeFill, GoNumber } from "react-icons/go";
import { IoFastFood } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { FaAward } from "react-icons/fa";

export default function Bottomnav() {
  return (
    <>
      <nav className="fixed w-full bg-[#f5eadd] z-50 bottom-0 left-0 shadow">
        <ul className="flex flex-wrap items-center justify-between md:justify-evenly p-4 shadow">
          <li className="text-sm">
            <Link href="/">
              <GoHomeFill className="text-2xl block mx-auto hover:text-[#d92200] focus:text-[#d92200]" />{" "}
              Home
            </Link>
          </li>
          <li className="text-sm">
            <Link href="/menu">
              <IoFastFood className="text-2xl block mx-auto hover:text-[#d92200] focus:text-[#d92200]" />{" "}
              Menu
            </Link>
          </li>
          <li className="text-sm hidden md:block">
            <Link href="/">
              <GoNumber className="text-2xl block mx-auto hover:text-[#d92200] focus:text-[#d92200]" />{" "}
              My Code
            </Link>
          </li>
          <li className="text-sm">
            <Link href="/offers">
              <GiTwoCoins className="text-2xl block mx-auto hover:text-[#d92200] focus:text-[#d92200]" />{" "}
              Offers
            </Link>
          </li>
          <li className="text-sm">
            <Link href="/rewards">
              <FaAward className="text-2xl block mx-auto hover:text-[#d92200] focus:text-[#d92200]" />{" "}
              Rewards
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
