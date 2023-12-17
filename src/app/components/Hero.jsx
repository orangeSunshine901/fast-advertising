import React from "react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-[667px]">
      <div className="pt-8 flex items-center">
        <Image
          src="/hero-image-mobile.png"
          alt="Hero Image Mobile"
          width={310}
          height={366}
        />
      </div>
      <div className="pt-[25px]">
        <h1 className="italic font-bold text-[30px] leading-[36px]">
          Crafting Impressions, One Space At A Time
        </h1>
        <p className="text-[16px] pt-[15px] pb-[30px] pl-1">
          Your one-stop advertising partner for digital printing, signage,
          digital advertising, and more.
        </p>
        <button className="ml-1 mb-[30px] bg-[#F5B70D] font-bold text-[12px] font-semibold px-[21.5px] h-[31px] rounded-md">
          Start Your Journey
        </button>
      </div>
      <div>
        <Image
          src="/bubble-btm.svg"
          alt="Decoration"
          width={110}
          height={134}
          className="absolute right-0 bottom-[-50px] z-0"
        />
      </div>
    </div>
  )
}
