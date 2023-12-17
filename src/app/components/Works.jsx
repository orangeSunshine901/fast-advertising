import React from "react"
import Image from "next/image"

export default function Works() {
  return (
    <div>
      <div className="h-[100vh] bg-[#DEF0F2] pt-[82px] px-5 text-[#111F30] pb-6 ">
        <h2 className="text-[23px] uppercase font-bold ">Our Works</h2>
        <Image
          src="/carousel-image-1.jpg"
          alt="Carousel image"
          width={349}
          height={464}
          className="pt-8"
        />
      </div>
    </div>
  )
}
