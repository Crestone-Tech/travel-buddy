import React from "react";

export default function FAQ() {
  const questions = [
    {
      question: "What is Travel Buddy?",
      answer:
        "Travel Buddy is the Ultimate travel tool for you and your 'tribe'. With Travel Buddy you can cllectively as a group plan you dream vacation with our tools. With our Envision Board you can simultaneously use our integrated white board to share ideas and collaborate. You can manae your travel groups within our Tribes tab and plan reservations within our Buddy Tab. ",
    },
    {
      question: "Why make Travel buddy?",
      answer:
        "We created Travel Buddy to revolutionize the way groups plan and experience travel. In today’s fast-paced world, coordinating a group trip can be challenging, from juggling everyone's preferences to organizing activities and reservations. We wanted to provide a platform that simplifies this process, allowing friends, families, and like-minded travelers to come together seamlessly.",
    },
    { question: "Having Issues?", answer: "Contact us via our Contact Tab!" },
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
