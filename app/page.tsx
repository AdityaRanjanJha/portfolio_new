import About from "./About/About";
import Hero from "./Hero/page";
import Header from "./header/page";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <header>
        <title>My Portfolio</title>
      </header>

      <Header />
      <section id="hero" className="snap-start">
      <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center" >
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="">
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );

}
