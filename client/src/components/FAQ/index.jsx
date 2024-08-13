import React from "react";

export default function FAQ() {
  const questions = [
    {
      question: "What is Travel Buddy\u2122?",
      answer:
        "Travel Buddy is the ultimate travel tool for you and your 'tribe'. With Travel Buddy you can cllectively as a group plan you dream vacation with our tools. With our Envision Board you can simultaneously use our integrated white board to share ideas and collaborate. You can manae your travel groups within our Tribes tab and plan reservations within our Buddy Tab. ",
    },
    {
      question: "Why make Travel Buddy?",
      answer:
        "We created Travel Buddy to revolutionize the way groups plan and experience travel. In today’s fast-paced world, coordinating a group trip can be challenging, from juggling everyone's preferences to organizing activities and reservations. We wanted to provide a platform that simplifies this process, allowing friends, families, and like-minded travelers to come together seamlessly.",
    },
    {
      question: "How should I use Travel Buddy?",
      answer: "Gather your traveling companions and use our Envision Board to brainstorm. Once you know where you want to go and what type of vacation you'll take, use the Buddy Board to track all your plans, bookings, and logistics in one place!",
    },
    {
      question: "Having Issues?",
      answer:
        "Use the Contact form to let us know – we might even get around to fixing it!",
    },
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
