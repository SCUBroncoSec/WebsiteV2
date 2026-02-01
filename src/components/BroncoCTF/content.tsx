import React from "react";
import { FocusCards } from "../ui/focus-cards";
import { HoverEffect } from "../ui/card-hover-effect";
import { TwoColumn } from "../ui/two-column";
import { NumberFocusCards } from "../ui/number-focus-cards";
import { Gallery } from "../ui/gallery";


const Content = () => {
    return (
        <div className="relative z-20">

            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                About the Competititon
            </span>

            <TwoColumn img="original-art/Final_Horse_With_Flag_final.webp" imgAlt="BroncoCTF">
                BroncoCTF is an international CTF competition hosted by BroncoSec. It runs in conjunction with <a className="text-decoration: underline" href="https://hackforhumanity.io/">Hack for Humanity</a>, Santa Clara University's social good hackathon. <br /><br />
                In BroncoCTF, teams of students solve various cybersecurity challenges by hunting for secret flags hidden in programs, cryptosystems, files, and even games! Use your ethical hacking skills to solve digital puzzles involving real-world technologies. <br /><br />
                There are challenges for complete beginners and experienced hackers alike. Cash prizes are awarded to top Santa Clara University students, while the world can compete for bragging rights. <br /><br />
                BroncoCTF 2026 will be our fifth CTF, and our third year hosting the event globally!
            </TwoColumn>

            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                2025 Statistics
            </span>


            <NumberFocusCards items={[
                {
                    title: "Global Participants",
                    number: 1731,
                    icon: "person-colorized.svg",
                    desc: "",
                    idx: 0
                },
                {
                    title: "Global Teams",
                    number: 806,
                    icon: "team-colorized.svg",
                    desc: "",
                    idx: 1
                },
                {
                    title: "Participating Countries",
                    number: 96,
                    icon: "earth-colorized.svg",
                    desc: "",
                    idx: 2
                },
                {
                    title: "Total Challenges",
                    number: 40,
                    icon: "flag-colorized.svg",
                    desc: "",
                    idx: 3
                },
                {
                    title: "Flag Submissions",
                    number: 25894,
                    icon: "progress-flag-colorized.svg",
                    desc: "",
                    idx: 4
                },
                {
                    title: "Correct Flag Submissions",
                    number: 7340,
                    icon: "correct-flag-colorized.svg",
                    desc: "",
                    idx: 5
                }
            ]} />

            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                Past Repositories
            </span>

                <HoverEffect items={[
                    {
                        title: "BroncoCTF 2025",
                        description:
                          "Our biggest CTF yet",
                        link: "https://github.com/SCUBroncoSec/BroncoCTF-2025-Public",
                    },
                    {
                        title: "BroncoCTF 2024",
                        description:
                          "First time going global",
                        link: "https://github.com/SCUBroncoSec/BroncoCTF-2024-Public",
                      },
                      {
                        title: "BroncoCTF 2023",
                        description:
                            "In-person competition featuring a live tiebreaker",
                        link: "https://github.com/SCUBroncoSec/BroncoCTF-2023-Internal",
                    },
                        ]} />


            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                Sponsors
            </span>

            <span className="pt-16 pb-8 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-4xl font-bold text-center">
                Platinum Tier
            </span>

            <Gallery images={["original-art/Final_Horse_ad_final.webp"]} />

                        <span className="pt-16 pb-8 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-4xl font-bold text-center">
                Gold Tier
            </span>

            <Gallery images={["original-art/Final_Horse_ad_final.webp"]} />



            <span className="pt-16 pb-8 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-4xl font-bold text-center">
                Silver Tier
            </span>




            <Gallery images={["original-art/Final_Horse_ad_final.webp"]} />



            <span className="pt-16 pb-8 flex flex-col items-center justify-center relative z-20 text-amber-50 text-lg font-bold text-center">
                                We're looking for sponsors! Please reach out at broncosecclub@scu.edu if you'd like to help our competition!
            </span>

        </div>
    )
}

export default Content