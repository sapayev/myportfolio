import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sadyk Sapayev </span>
            from <span className="purple"> Bayramali, Turkmenistan.</span>
            <br />I am a junior fullstack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Footbal
            </li>
            <li className="about-activity">
              <ImPointRight /> Read and Write book
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Information and intelligence are the currencies of the future, far more valuable than money in a world where the pace of change is accelerating at an unprecedented rate."{" "}
          </p>
          <footer className="blockquote-footer">Copied by me from ChatGPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
