import React, { useState } from "react";
import "./RegexComp.css";
import Accordion from "react-bootstrap/Accordion";

const RegexComp = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [matchedText, setMatchedText] = useState();

  const handleMatch = () => {
    const regex = new RegExp(text2, "gi");
    const matches = text1.match(regex);
    if (matches) {
      setMatchedText(matches.join(" "));
    } else {
      setMatchedText("No matches found");
    }
  };

  return (
    <>
      <div className="regex_testing">Regex Testing Management</div>

      <div className="text_matcher_container">
        <label>Regex: </label>
        <input
          className="input_field"
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </div>
      <div className="accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Simple Text</Accordion.Header>
            <Accordion.Body>
              <div className="text_matcher_container">
                <label>Test Text: </label>
                <input
                  className="input_field"
                  type="text"
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                />
                <button className="match_button" onClick={handleMatch}>
                  Apply Regex
                </button>
                <p className="matched_text">
                  Matched Text: <mark>{matchedText}</mark>
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="accordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Use Notes</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Search Regression Notes</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <h6>@2012-2021 Health Connect All Rights Reserved.</h6>
      </div>
    </>
  );
};

export default RegexComp;
