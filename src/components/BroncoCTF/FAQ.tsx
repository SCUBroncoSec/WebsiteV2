import React from "react";
import AccordionItem from "@/components/BroncoCTF/AccordionItem";
import Image from "next/image";


const FAQ: React.FC = () => {
  return (
      <section id="faq">
  <h2 className="FAQHeader">Frequently Asked Questions</h2>
  <div className="accordion-container">
    <div className="accordion">
      <AccordionItem
        question="What is a CTF Competition? "
        answer="A CTF competitition stands for capture the flag where teams (or individuals) attempt to solve cybersecurity puzzles to capture a flag."
      />
      <AccordionItem
        question="How is the competition scored? "
        answer="The harder the puzzle, the more points you get. The team with the most points wins"
      />
      <AccordionItem
        question="Is BroncoCTF free? "
        answer="Yes. There is no cost to join."
      />

      <AccordionItem
        question="What prizes are there for winning? "
        answer="Yes. That is going to be determined"
      />

      <AccordionItem
        question="Are non-SCU students elgible to join? "
        answer="Yes. "
      />


    </div>
    <div className="FAQImage">
    <Image
          src="/ShieldBuckyGlow.webp"
          alt="BroncoSec Logo"
          width={300}
          height={400}
        />
    </div>
  </div>
</section>

  );
};

export default FAQ;
