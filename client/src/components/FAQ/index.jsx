import React from "react";

export default function FAQ() {
  const questions = [
    {
      question: "What is Travel Buddy?",
      answer:
        "Travel Buddy is the Ultimate travel tool for you and your tribe.etc...",
    },
    { question: "Why make Travel buddy?", answer: "Why not...." },
    { question: "", answer: "" },
  ];
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {questions.map((item, index) => (
          <li key={index} className="faq-item">
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
