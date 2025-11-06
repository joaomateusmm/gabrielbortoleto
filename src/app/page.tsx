"use client";

import Interlagos3D from "@/components/Interlagos3D";
import CountUp from "@/components/CountUp";
import GlareHover from "@/components/GlareHover";
import GlareHover2 from "@/components/GlareHover2";
import ShinyText from "@/components/ShinyText";
import ShinyText2 from "@/components/ShinyText2";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/LiquidEther";
import CenterModel3D from "@/components/CenterModel3D";
import LoadingScreen from "@/components/LoadingScreen";
import MenuOverlay from "@/components/MenuOverlay";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className="bg-[#000a03] "
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Ether - Z-index 0 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "auto",
          }}
        >
          <LiquidEther
            colors={["#4dff29", "#22b44e", "#b0f0a3"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Modelo 3D Central - Z-index 5 (acima do Ether, abaixo dos cards) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <CenterModel3D />
        </div>

        {/* Header - Z-index 10 */}
        <div
          className="flex justify-between items-center w-full px-4 sm:px-8 md:px-12"
          style={{
            position: "absolute",
            bottom: "83%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          <div>
            <Image
              src="/logo.svg"
              alt="Gabriel Bortoleto Logo"
              width={130}
              height={130}
              priority
              className="opacity-80 hover:scale-115 duration-400 saturate-0 hover:saturate-100 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
            />
          </div>
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            <Button className="py-2 sm:py-6 md:py-9.5 px-3 sm:px-6 md:px-auto cursor-pointer group box-shadow bg-black/5 backdrop-blur-lg hover:bg-black/30 border-2 sm:border-3 border-green-900/70 transition-all duration-300 overflow-hidden">
              <h1 className="text-sm sm:text-lg md:text-2xl font-bold">
                CORRIDAS
              </h1>
            </Button>
            <Button
              onClick={() => setIsMenuOpen(true)}
              className="py-2 sm:py-6 md:py-10 px-4 sm:px-6 md:px-8 group bg-gray-200 cursor-pointer hover:bg-gray-100 transition-all duration-300 overflow-hidden"
              style={{ width: "60px" }}
            >
              <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
                <div className="w-4 sm:w-5 md:w-6 h-0.5 sm:h-0.5 md:h-1 -translate-x-0.5 sm:-translate-x-1 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-5 sm:group-hover:w-6 md:group-hover:w-8 group-hover:-translate-x-1 sm:group-hover:-translate-x-1.5 md:group-hover:-translate-x-2"></div>
                <div className="w-4 sm:w-5 md:w-6 h-0.5 sm:h-0.5 md:h-1 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-4.5 sm:group-hover:w-5.5 md:group-hover:w-7"></div>
                <div className="w-4 sm:w-5 md:w-6 h-0.5 sm:h-0.5 md:h-1 translate-x-0.5 sm:translate-x-1 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-5 sm:group-hover:w-6 md:group-hover:w-8 group-hover:translate-x-1 sm:group-hover:translate-x-1.5 md:group-hover:translate-x-2"></div>
              </div>
            </Button>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center md:items-end px-4 sm:px-8 md:px-12 pb-4 sm:pb-8 md:pb-12 gap-6 md:gap-0"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          {/* Card Esquerdo */}

          <div className="w-full md:w-auto">
            <AnimatedContent
              distance={250}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <h1 className="text-white/50 text-sm sm:text-md font-bold mb-2">
                Última Notícia
              </h1>
              <div className="flex flex-col gap-3 items-start">
                <GlareHover2
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <div
                    className="flex flex-col backdrop-blur-lg items-start gap-4 rounded-lg justify-between px-3 sm:px-4 custom-scrollbar w-full"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    <div className="bg-white/10 px-3 sm:px-4 py-1 rounded-full">
                      <h1 className="text-white/50 text-xs sm:text-sm font-medium">
                        23 / 10 / 25
                      </h1>
                    </div>
                    <div></div>
                    <div>
                      <p className="text-sm sm:text-md text-white/70 font-medium">
                        Gabriel Bortoleto estreia no GP do México de F1
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium hidden sm:block">
                        O piloto brasileiro Gabriel Bortoleto, natural de Osasco
                        (SP), encara neste fim de semana mais um desafio em sua
                        temporada de estreia na Fórmula 1. O jovem competidor
                        disputará pela primeira vez o Grande Prêmio do México,
                        20ª etapa do Campeonato Mundial, que será realizado no
                        tradicional Autódromo Hermanos Rodríguez, na capital
                        mexicana.
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium hidden md:block">
                        A etapa, ainda na AMérica do Norte, sucede um fim de
                        semana complicado em Austin, no Texas (EUA), onde
                        Bortoleto terminou a corrida na 18ª posição. O foco
                        agora está totalmente voltado em reagir e retomar o bom
                        ritmo apresentado nas provas anteriores.
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 mt-2 font-medium hidden md:block">
                        Estou muito animado para correr no México neste fim de
                        semana.
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/50 font-medium hidden lg:block">
                        Ouvi muito sobre a atmosfera e a energia dos fãs,
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/30 font-medium hidden lg:block">
                        e é empolgante finalmente poder viver isso pessoalmente.
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/10 font-medium hidden lg:block">
                        É uma pista cheia de história, por onde passaram
                      </p>
                    </div>
                    <div>
                      <Button className="cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border-white/30 text-white/70 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all duration-200">
                        ler Mais
                      </Button>
                    </div>
                  </div>
                </GlareHover2>
              </div>
            </AnimatedContent>
          </div>

          {/* Card Direito */}
          <div className="w-full md:w-auto">
            <AnimatedContent
              distance={250}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <h1 className="text-white/50 text-sm sm:text-md font-bold mb-2 text-center md:text-right">
                Próx. Corrida
              </h1>
              <div className="flex flex-col gap-3 items-center md:items-end backdrop-blur-md">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <div className="flex flex-col items-center gap-3 sm:gap-4 py-3 sm:py-4 rounded-lg">
                    <div
                      className="cursor-pointer -mt-4 sm:-mt-8"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <Interlagos3D />
                    </div>
                    <ShinyText2
                      text="MÔNACO GP"
                      disabled={false}
                      speed={2}
                      className="text-white/70 text-sm sm:text-md font-medium"
                    />
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
                </GlareHover>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
