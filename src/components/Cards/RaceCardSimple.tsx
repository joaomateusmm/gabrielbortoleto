"use client";

import CountUp from "@/components/CountUp";
import ShinyText from "@/components/ShinyText";

export default function RaceCardSimple() {
  return (
    <div className="w-auto">
      <h1 className="text-white/50 text-md font-bold mb-2">Próxima Corrida</h1>
      <div className="flex flex-col gap-3 items-center backdrop-blur-md bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="text-white/70 text-lg font-medium">MÔNACO GP</div>
        <div className="border-t border-[#ffffff31] h-1 w-[70%]"></div>
        <ShinyText
          text="PONTOS 2025"
          disabled={false}
          speed={4}
          className="text-white/70 text-sm sm:text-md font-medium"
        />
        <CountUp
          from={0}
          to={19}
          separator=","
          direction="up"
          duration={2}
          className="text-white/80 text-4xl sm:text-5xl md:text-6xl font-bold"
        />
      </div>
    </div>
  );
}
