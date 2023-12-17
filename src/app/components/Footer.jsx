import React from "react"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="h-[186px] bg-[#DEF0F2] flex flex-col items-center justify-around px-5 pt-[24px] pt-[14px]">
      <div className="flex flex-row">
        <div className="w-[55%] h-full flex flex-col gap-y-4">
          <div>
            <Image
              src="logo-mobile.svg"
              alt="Fast Advertising Logo"
              width={85}
              height={26}
            />
          </div>
          <div className="flex flex-row gap-x-2">
            <a className="bg-[#111F30] w-[28px] h-[28px] rounded-[50%] flex justify-center">
              <Image
                src="/instagram-icon.svg"
                alt="Instagram Logo"
                width={15}
                height={15}
              />
            </a>
            <a className="bg-[#111F30] w-[28px] h-[28px] rounded-[50%] flex justify-center">
              <Image
                src="/Facebook.svg"
                alt="Facebook Logo"
                width={25}
                height={25}
              />
            </a>
            <a className="bg-[#111F30] w-[28px] h-[28px] rounded-[50%] flex justify-center">
              <Image
                src="/Location.svg"
                alt="Location Logo"
                width={13}
                height={13}
              />
            </a>
            <a className="bg-[#111F30] w-[28px] h-[28px] rounded-[50%] flex justify-center">
              <Image
                src="/mail-icon.svg"
                alt="Mail Logo"
                width={15}
                height={15}
              />
            </a>
          </div>
          <div>
            <p className="text-[8px]">
              FAST ADVERTISEMENT LTD, INTERNATIONAL HOUSE 6 SOUTH MOLTON ST,
              LONDON, UNITED KINGDOM, W1K 5QF
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end w-full text-[10px] underline justify-between font-semibold">
          <a>Home</a>
          <a>About Us</a>
          <a>Our Project</a>
          <a>Our Services</a>
        </div>
      </div>
      <div className=" border-t-[1px] border-[#111F30] w-[100%] text-center">
        <p className="text-[8px] pt-1 font-light">
          Copyright Fast Advertisement LTD{" "}
          <span className="relative text-[5px] bottom-1">&copy;</span>
        </p>
      </div>
    </div>
  )
}
