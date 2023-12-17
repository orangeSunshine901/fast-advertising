import React from "react"
import Image from "next/image"

export default function About() {
  return (
    <div>
      <div className="relative min-h-[667px] bg-[#111F30] bg-mobile pt-[82px] px-5 text-[#DEF0F2] pb-6 ">
        <h2 className="text-[23px] uppercase font-bold ">About Us</h2>
        <p className="text-[16px] pt-[15px] pb-[20px]">
          With over two decades in the advertising field, we specialize in sign
          and print ads.
        </p>
        <p className="text-[16px] pb-[30px]">
          Our expertise extends to elevating brands both digitally and
          physically, creating a seamless presence across all platforms.
        </p>
        <Image
          src="/shop-img-mobile.jpg"
          alt="Fast Advertising shop front"
          width={322}
          height={243}
        />
        <div className="relative float-right bottom-20 z-0">
          <Image
            src="/owner-image-mobile.jpg"
            alt="Muhammad Usman the owner of the website"
            width={121}
            height={181}
          />
        </div>
      </div>
    </div>
  )
}
