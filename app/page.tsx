"use client";
import { Canvas } from "@react-three/fiber";
import Mutant from "./components/mutant";
import MarqueeComponent from "./components/marquee";

export default function Home() {
  return (
    <div className="relative bg-black w-screen h-screen text-white overflow-hidden">
      <span className="absolute h-full top-1/2 ml-8 text-xs font-extrabold cursor-pointer">
        <p>SAVAGE</p>
        <p>UNSTOPPABLE</p>
      </span>

      <span className="absolute h-full top-1/2 right-0 mr-8 text-xs text-right font-extrabold cursor-pointer">
        <p>RUTHLESS</p>
        <p>APOCALYPTIC</p>
      </span>
      <div className="absolute  z-1 left-0 right-0">
        <p className="w-full text-center text-8xl md:text-[168px] font-extrabold text-gray-200 -tracking-[0.06em] ">
          THE <span className="text-red-600 text-shadow-2xs ">MUTANT</span>
        </p>
      </div>
      <Canvas className="z-2 cursor-pointer">
        <Mutant />
      </Canvas>
      <div className="absolute bottom-4 md:bottom-10 w-full">
        <MarqueeComponent />
      </div>
    </div>
  );
}
