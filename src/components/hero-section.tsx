"use client";

import { EncryptedText } from "./ui/encrypted-text"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Highlight } from "./ui/hero-highlight"
import { Spotlight } from "@/components/ui/spotlight-new";


const HeroSection = () => {
    return (
            <div className="relative w-full min-h-screen mx-auto flex flex-col items-center justify-center">
                <div
                    className={cn(
                    "fixed inset-0 z-0",
                    "bg-size-[20px_20px]",
                    "bg-[radial-gradient(#404040_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                
                <Spotlight />
                
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -10, 0] }}
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl text-center mx-auto font-bold"
                    >
                    <Highlight className="text-white">
                        <span className="bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold">
                        BroncoSec
                        </span>
                    </Highlight>
                </motion.h1>

                <p className="relative z-20 mx-auto py-5 text-center text-4xl">
                    <EncryptedText
                        text="Santa Clara University's premier cyber security club"
                        encryptedClassName="text-red-900"
                        revealedClassName="bg-gradient-to-b from-rose-400 to-zinc-900 bg-clip-text py-5 text-4xl font-bold text-transparent"
                        revealDelayMs={30}
                    />
                </p>
            </div>
    );
}

export default HeroSection