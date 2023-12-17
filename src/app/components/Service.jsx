import React from "react"
import Image from "next/image"

export default function Service() {
  return (
    <div>
      <div className="h-[100vh] bg-[#DEF0F2] bg-mobile-1 pt-[82px] px-5 text-[#111F30] pb-6 ">
        <h2 className="text-[23px] uppercase font-bold ">Ink Jet Printing</h2>
        <p className="text-[16px] pt-[15px] pb-[15px]">
          Our advanced technology guarantees vibrant, accurate prints for all
          your needs.
        </p>
        <p className="text-[16px] pb-[20px]">
          Elevate your visuals with our expert printing services, where clarity
          and color come to life.
        </p>
        <p className="font-semibold">
          Banners <span> &#8226; </span> Flex Printing<span> &#8226; </span>
          Sticker Printing
        </p>
      </div>
    </div>
  )
}
