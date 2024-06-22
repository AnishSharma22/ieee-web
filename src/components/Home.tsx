import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import NavbarMain from "./Navbar";
import About from "./About";
import Navbar from "./Navbar";

export default function Home() {
  const images = ["https://i.imgur.com/wInyyoM.png"];
  const navbarHeight = 66; // Height of the navbar in pixels

  // Calculate the remaining height dynamically
  const remainingHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div>
      <Navbar/>
      <div className="h-screen relative z-0">
        <div style={{ height: remainingHeight }}>
          <ImagesSlider images={images}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <motion.p className="font-bold text-5xl md:text-6xl   text-center bg-clip-text text-transparent text-white py-4 font-raleway">
                Arduino and <br /> Line Follower Workshop
              </motion.p>
              <button className="px-4 py-2 backdrop-blur-sm border bg-rebPurple border-purple-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Join now →</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-purple-500 to-transparent" />
              </button>
            </motion.div>
          </ImagesSlider>
        </div>
      </div>
    </div>
  );
}
