import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./FAQ.css";
import arrowDown from "../../images/icon-arrow.svg";
import arrowUp from "../../images/icon-close.svg";

export default function FAQ() {
  const qna = [
    {
      question: "What is Bookmark?",
      answer:
        "Ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, recusandae iure? Ipsa provident reiciendis dolor voluptatibus repellat incidunt accusamus quasi modi expedita debitis.",
    },
    {
      question: "How can I request a new Browser?",
      answer:
        "Dolor sit amet consectetur, adipisicing elit. Suscipit, recusandae iure? Ipsa provident reiciendis dolor voluptatibus repellat incidunt accusamus quasi modi expedita debitis.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sit amet consectetur, adipisicing elit. Suscipit, recusandae iure? Ipsa provident reiciendis dolor voluptatibus repellat incidunt accusamus quasi modi expedita debitis.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, recusandae iure? Ipsa provident reiciendis dolor voluptatibus repellat incidunt accusamus quasi modi expedita debitis.",
    },
  ];

  const [question, setQuestion] = useState("");
  const [activity, setActivity] = useState(false);

  const openAnswer = (nextQuestion) => {
    setQuestion(nextQuestion);
    activity ? setActivity(false) : setActivity(true);
  };
  return (
    <section className="FAQ">
      <section className="section-description">
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our freuently asked questions you'd like answered,
          please feel free to e-mail us.
        </p>
      </section>
      <section>
        {qna.map((element, index) => (
          <div className="accordion-container" key={element.question + index}>
            <Button
              name={element.question}
              className={"faq-btn question"}
              onClick={openAnswer.bind(this, element.question)}
              value={element.question}
              content={
                <img
                  className="arrow-down"
                  src={!activity ? arrowDown : arrowUp}
                  alt={"arrow-down"}
                ></img>
              }
            />
            {question === element.question && activity && (
              <p className="answer">{element.answer}</p>
            )}
          </div>
        ))}
      </section>
    </section>
  );
}
