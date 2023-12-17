import Image from "next/image"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Service from "./components/Service"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-items-start px-5">
        <Nav />
        <Hero />
      </div>
      <About />
      <Service />
      <Works />
      <Contact />
      <Footer />
    </main>
  )
}
