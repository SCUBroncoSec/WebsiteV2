"use client";

import { EncryptedText } from "../ui/encrypted-text"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Highlight } from "../ui/hero-highlight"
import { Spotlight } from "@/components/ui/spotlight-new";
import { sub } from "motion/react-client";


const HeroSection = ({ title, subtext, subtext2, imagePath, children }: { title: string; subtext: string; subtext2?: string; imagePath: string; children?: React.ReactNode }) => {
    const concat_subtext = subtext + " " + subtext2;
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

                    <img
                    src={imagePath}
                    alt="Hero"
                    className="absolute inset-0 h-1/3 w-1/3 object-cover object-center mx-auto my-8 custom-hero-image"/>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -10, 0] }}
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl text-center mx-auto font-bold"
                    >
                    <Highlight className="text-white">
                        <span className="bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold">
                        {title}
                        </span>
                    </Highlight>
                </motion.h1>

                <p className="relative z-20 mx-auto py-5 text-center text-4xl">
                    {subtext2 && (<>
                        <EncryptedText
                            text={subtext2}
                            encryptedClassName="text-red-900"
                            revealedClassName="bg-gradient-to-b from-rose-400 to-zinc-900 bg-clip-text py-5 text-4xl font-bold text-transparent"
                            revealDelayMs={30}
                        />
                        <br />
                        </>
                    )}
                    <EncryptedText
                        text={subtext}
                        encryptedClassName="text-red-900"
                        revealedClassName="bg-gradient-to-b from-rose-400 to-zinc-900 bg-clip-text py-5 text-4xl font-bold text-transparent"
                        revealDelayMs={30}
                    />
                </p>
                {children}

            </div>
            
    );
}

export default HeroSection