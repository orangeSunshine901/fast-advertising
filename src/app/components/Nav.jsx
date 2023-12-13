import React from "react"
import Image from "next/image"

export default function Nav() {
  return (
    <div>
      <nav className="pt-6 flex flex-row justify-between items-center">
        <Image
          src="/logo-mobile.svg"
          alt="Fast Advertising Logo"
          width={85}
          height={26}
        />
        <Image
          src="/hamburger.svg"
          alt="Fast Advertising Logo"
          width={19}
          height={19}
          className="z-10"
        />
        {/* Background bubble nav */}
        <div className="absolute right-0 top-0  z-0">
          <Image
            src="/bubble-nav.svg"
            alt="Decoration"
            width={110}
            height={134}
          />
        </div>
      </nav>
    </div>
  )
}
