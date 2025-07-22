import About from "./About/About";
import Experience from "./Experience/Experience";
import Hero from "./Hero/page";
import Header from "./header/page";
import Skills from "./Skills/Skills";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen z-0">
      <ScrollToTop />
      <header>
        <title>My Portfolio</title>
      </header>

      <Header />
      <section id="hero">
      <Hero />
      </section>
      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills/>
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );

}
