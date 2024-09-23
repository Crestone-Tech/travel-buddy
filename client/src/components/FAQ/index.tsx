type FAQuestion = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const questions: FAQuestion[] = [
    {
      question: "What is Travel Buddy\u2122?",
      answer:
        "Travel Buddy is the ultimate travel tool for you and your 'Tribe' - your traveling companions. Use Travel Buddy together to plan your dream vacation! The Envision Board allows you to collaborate and share ideas in real time. Manage your travel groups, track reservations, and maintain a budget. It's all possible with Travel Buddy\u2122! ",
    },
    {
      question: "Why Travel Buddy?",
      answer:
        "We created Travel Buddy to revolutionize the way groups plan and experience travel. In today’s fast-paced world, coordinating a group trip can be challenging, from juggling everyone's preferences to organizing activities and reservations. We wanted to provide a platform that simplifies this process, allowing friends, families, and like-minded travelers to come together seamlessly.",
    },
    {
      question: "How should I use Travel Buddy?",
      answer:
        "Gather your fellow travelers and create a Tribe. Brainstorm ideas, add links, and create a shared vision with the Envision Board. Once you know where you want to go and what type of vacation you'll take, use the Buddy Board to track all your plans, bookings, and logistics in one place.",
    },
    {
      question: "Having Issues?",
      answer:
        "Use the Contact form to let us know – we'll do our best to get it fixed!",
    },
  ];
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {questions.map((item: FAQuestion, index: number) => (
          <li key={index} className="faq-item">
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
