'use client';
import React, { useRef, useEffect } from "react";
import { FocusCards } from "../ui/focus-cards";
import { HoverEffect } from "../ui/card-hover-effect";
import { TwoColumn } from "../ui/two-column";
import { NumberFocusCards } from "../ui/number-focus-cards";
import { Gallery } from "../ui/gallery";

function HTMLComment({ comment }: { comment: string }) {
  const ref = useRef<HTMLScriptElement>(null);

  useEffect(() => {
    // This runs after the component mounts in the browser
    if (ref.current) {
      ref.current.outerHTML = `<!-- ${comment} -->`;
    }
  }, [comment]);

  // A placeholder that will be replaced by the comment in the DOM
  return <script ref={ref} type="text/placeholder" />;
}



const Content = () => {
    return (
        <div className="relative z-20">

            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                About the Competititon
            </span>

            <TwoColumn img="original-art/Final_Horse_With_Flag_final.webp" imgAlt="BroncoCTF">
                BroncoCTF is an international CTF competition hosted by BroncoSec. It runs in conjunction with <a className="text-decoration: underline" href="https://hackforhumanity.io/">Hack for Humanity</a>, Santa Clara University's social good hackathon. <br /><br />
                In BroncoCTF, teams of students solve various cybersecurity challenges by hunting for secret <span onClick={() => {
                    const element = document.getElementById('addtext');
                    console.log(element);
                    if (element && element.firstChild) {
                        element.firstChild.textContent +=
                        '2 - 3y_y0u_f';
                    }
                    const audio = new Audio('ding.oga');
                    audio.play();

                        }} 
                className="cursor-pointer">
                     flags 
                </span> hidden in programs, cryptosystems, files, and even games! Use your ethical hacking skills to solve digital puzzles involving real-world technologies. <br /><br />
                There are challenges for complete beginners and experienced hackers alike. Cash prizes are awarded to top Santa Clara University students, while the world can compete for bragging rights. <br /><br />
                BroncoCTF <a href="/7.txt" download="7.txt" onClick={() => {      const audio = new Audio('ding.oga'); audio.play();}}>2026</a> will be our fifth CTF, and our third year hosting the event globally! 
                <div id="addtext"> </div>

            </TwoColumn>

            
            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                Prize Pool
            </span>


            <span className="pt-16 pb-8 flex flex-col items-center justify-center relative z-20 text-amber-50 text-lg font-bold text-center">
                <h1 className="text-6xl">🥇</h1>
                First Place: $300
                <a className="text-decoration: underline display: inline" href="https://www.sans.org/cyber-security-courses/foundations">+ SEC275 Scholarship</a> <a className="text-decoration: underline display: inline" href="https://www.giac.org/certifications/foundational-cybersecurity-technologies-gfact/">+ GFACT Certification Scholarship</a> <br/>
                <h1 className="text-6xl">🥈</h1>
                Second Place: $200 <br/> <br/>
                <h1 className="text-6xl">🥉</h1>
                Thrid Place: $100 <br/> <br/>
                <h1 className="text-6xl"> <span id="cookie" onClick={() => {
                    const n = "KEY4";
                    const v = "4 - m_4ll_w1";
                    // const expirationDate = new Date();
                    // expirationDate.setTime(expirationDate.getTime() + (1)); // 1 year
                    document.cookie = `${n}=${v}; path=/`;

                    const element = document.getElementById('cookie');
                    console.log(element);
                    if (element && element.firstChild) {
                        element.firstChild.textContent +=
                        '🍪';
                    }
                    const audio = new Audio('puzzle.oga');
                    audio.play();

                        }} 
                className="cursor-pointer">
                     🙋 
                </span></h1>
                Best Solo Score: BroncoCTF 2026 Hoodie (Medium Size) <br/> <br/>
            </span>

            {/*     router.push('/destination-page');   */}




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
                    title: "8 - _4t_411}",
                    number: 7340,
                    icon: "correct-flag-colorized.svg",
                    desc: "",
                    idx: 5
                }
            ]} />

            <span  className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
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
                    {
                        title: "BroncoCTF 2026...?",
                        description:
                            "",
                        link: "/BroncoCTF?KEY=6-ut31y_n0",
                    }
                        ]} />


            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                Thank You to our Sponsor
            </span>


            <img src="SANS-White.png" alt="SANS Logo" className="block w-1/4 mx-auto" />
            <HTMLComment comment="!!! 5 - th_4b501 !!!" />
            {/* <Gallery images={["SANS-White.png"]} /> */}
        </div>
    )
}

export default Content

/*
1 - bronco{h
2 - 3y_y0u_f
3 - 0und_th3
4 - m_4ll_w1
5 - th_4b501
6 - ut31y_n0
7 - _w0rr135
8 - _4t_411}
*/