import React from "react";
import { FocusCards } from "../ui/focus-cards";
import { HoverEffect } from "../ui/card-hover-effect";

const Content = () => {
    return (
        <div className="relative z-20">

            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                What We Do:
            </span>

            <FocusCards cards={[
                {
                    title: "Weekly Workshops",
                    src: "workshops.webp",
                    desc: "We host weekly cybersecurity workshops focused on safe developer practices.",
                },
                {
                    title: "CTF Competitions",
                    src: "ctftime.webp",
                    desc: "We participate in online Capture the Flag competitions held by organizations around the world.",
                },
                {
                    title: "BroncoCTF",
                    src: "FlagBuckyGlow.webp",
                    desc: "Our flagship CTF event, held annually in February.",
                }
            ]} />



            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                Board Members:
            </span>

            <FocusCards cards={[
                {
                    title: "President - Ethan Sychangco",
                    src: "https://www.scuacm.com/assets/Ethan_Sychangco-DcR4UfuN.png",
                },
                {
                    title: "Vice President - William Patmore",
                    src: "https://www.scuacm.com/assets/William_Patmore-9ulofXry.jpg",
                },
                {
                    title: "CTF Lead - Kara Barrese",
                    src: "https://www.scuacm.com/assets/Kara_Barrese-BkQrBfcQ.jpg",
                },
                {
                    title: "Event Lead - Viet Ha",
                    src: "https://www.scuacm.com/assets/Viet_Ha-Dk_WdfCY.png",
                },
                {
                    title: "Event Lead - Huy Ngo",
                    src: "https://www.scuacm.com/assets/Huy_Ngo-CFK0IeP5.jpeg",
                },
                {
                    title: "Event Lead - Eric Wei",
                    src: "https://www.scuacm.com/assets/Eric_Wei-BE8VWLLN.jpg",
                },
                {
                    title: "Event Lead - Tate Steven-Schneider",
                    src: "https://www.scuacm.com/assets/Tate_Steven-Schneider-B6d82dI1.jpg",
                },
                {
                    title: "Publicity Manager - Tiffany Nguyen",
                    src: "https://www.scuacm.com/assets/Tiffany_Nguyen-CfNTYE7j.png",
                },
                {
                    title: "Treasurer - Jason Wu",
                    src: "https://www.scuacm.com/assets/Jason_Wu-Ds_PEfUf.jpg",
                },
                {
                    title: "Outreach Coordinator - Evan Chin",
                    src: "/EvanC.png", // TODO: This is using a local image, change SCUACM Picture!!!
                }
            ]} />

            <span className="pt-36 pb-20 flex flex-col items-center justify-center relative z-20 bg-linear-to-b from-red-600 to-red-950 bg-clip-text text-transparent text-7xl font-bold text-center">
                Get Involved
            </span>

            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={[
                    {
                        title: "Events",
                        description:
                          "Visit the ACM Event List to find the next BroncoSec event",
                        link: "https://www.scuacm.com/events",
                    },
                    {
                        title: "Mailing List",
                        description:
                          "Sign up for our mailing list",
                        link: "https://forms.gle/kk6AEfMapfp5Udgi8",
                      },
                      {
                        title: "Discord",
                        description:
                          "Join the ACM Discord server and visit the BroncoSec section",
                        link: "https://discord.gg/EbjxNFtSkb",
                      },
                      {
                        title: "Instagram",
                        description:
                          "Follow our Instagram page",
                        link: "https://www.instagram.com/scubroncosec/",
                      },
                      {
                        title: "GitHub",
                        description:
                          "View our GitHub page",
                        link: "https://github.com/SCUBroncoSec",
                      },
                      {
                        title: "Inquiries",
                        description:
                          "Contact us at santaclara.broncosec@gmail.com",
                        link: "mailto:santaclara.broncosec@gmail.com",
                      },
                ]} />
            </div>

        </div>
    )
}

export default Content