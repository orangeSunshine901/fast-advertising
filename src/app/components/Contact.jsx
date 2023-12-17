import React from "react"
import Image from "next/image"

export default function About() {
  return (
    <div>
      <div className="relative h-[100vh] bg-[#111F30] bg-mobile pt-[82px] px-5 text-[#DEF0F2] pb-6 ">
        <h2 className="text-[23px] uppercase font-bold ">Contact Us</h2>
        <p className="text-[16px] pt-[15px] pb-[20px]">
          Let&#39;s Talk Signs! Drop Us a Line.
        </p>
        <form className="mt-5">
          <label className="text-[12px]">Name</label>
          <input
            id="name"
            placeholder="Your Name"
            name="name"
            className="px-2 py-2 rounded-md mt-2 mb-4 w-full text-[10px] h-11"
          ></input>
          <label className="text-[12px]">Email</label>
          <input
            id="email"
            placeholder="Your Email"
            name="email"
            className="px-2 py-2 rounded-md mt-2 mb-4 w-full text-[10px] h-11"
          ></input>
          <label className="text-[12px]">Phone</label>
          <input
            id="phone"
            placeholder="020 7245 8971"
            name="phone"
            type="phone"
            className="px-2 py-2 rounded-md mt-2 mb-4 w-full text-[10px] h-11"
          ></input>
          <button className="px-2 py-3 rounded-md mb-4 bg-[#F5B70D] w-full text-[10px] text-[#111F30] font-bold mt-4">
            Get in touch!
          </button>
        </form>
      </div>
    </div>
  )
}
