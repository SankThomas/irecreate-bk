import React from "react";
import { GrClose } from "react-icons/gr";

export default function Modal({ setShowModal }) {
  return (
    <>
      <div className="bg-black bg-opacity-40 absolute top-0 left-0 bottom-0 right-0 z-[99]">
        <div className="max-w-3xl mx-auto bg-[#f5eadd] p-4 lg:p-8 rounded-lg text-center mt-20">
          <GrClose
            className="cursor-pointer"
            onClick={() => setShowModal(false)}
          />

          <h2 className="text-2xl lg:text-4xl my-8">Enter your address</h2>

          <form>
            <input
              type="text"
              name="search"
              id="search2"
              placeholder="Your Address"
              className="bg-white rounded-lg py-3 px-6 placeholder-[#502215] text-[#502215] shadow w-9/12"
            />
          </form>

          <p className="text-orange mt-8 mb-12 font-bold">
            Unit can be entered during checkout
          </p>

          <p className="mb-8">
            Delivery Terms and Fees Apply. Click here for details.
          </p>

          <button className="py-3 px-6 w-9/12 border border-[#502215] text-[#502215] rounded-full">
            Deliver Here
          </button>
        </div>
      </div>
    </>
  );
}
