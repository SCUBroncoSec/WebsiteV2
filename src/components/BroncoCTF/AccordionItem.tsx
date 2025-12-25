"use client";

import { useState } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item" style={{ borderBottom: "1px solid #ccc" }}>
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <h3 style={{ margin: 0 }}>{question}</h3>
        <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div
          className="accordion-content"
          style={{ padding: "0 1rem 1rem 1rem" }}
        >
          <p style={{ margin: 0 }}>{answer}</p>
        </div>
      )}
    </div>
  );
}
