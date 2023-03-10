import React, { useEffect, useState } from "react";
import "../styles/components/keyboard.scss";
import { rows } from "../utils/keys";

export const KeyBoard = ({ startText }) => {
  const [indexLetter, setIndexLetter] = useState(0);
  const [wrongIndexLetter, setWrongIndexLetter] = useState([]);
  const [notPressetLetters, setNotPressetLetters] = useState(startText);
  const [pressetLetters, setPressetLetters] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const countingLetters = (e) => {
    const chengeStr = notPressetLetters.slice(1);
    const firstLetter = pressetLetters + notPressetLetters[0];
    setIndexLetter(indexLetter + 1);
    setNotPressetLetters(chengeStr);
    setPressetLetters(firstLetter);
    if (e.key !== activeButton) {
      setActiveButton(e.key);
    } else {
      // ! Fix this!
      setActiveButton("");
      setActiveButton(e.key);
    }
  };

  const onKeypress = (e) => {
    // console.log(e);
    // if (e.keyCode === 13) {
    //   console.log("Enter press");
    // }

    if (!notPressetLetters) {
      return null;
    }

    countingLetters(e);

    if (!(e.key === startText[indexLetter])) {
      setWrongIndexLetter([...wrongIndexLetter, indexLetter]);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [indexLetter]);

  return (
    <div className="keyboard">
      <div className="keyboard__container">
        <div className="content">
          <h1>
            <span className="pressetLettert">
              {pressetLetters &&
                pressetLetters.split("").map((pressetLetter, index) =>
                  wrongIndexLetter.includes(index) ? (
                    <span key={index} className="whong-letter">
                      {pressetLetter}
                    </span>
                  ) : (
                    pressetLetter
                  )
                )}
            </span>
            {notPressetLetters}
          </h1>
        </div>
        <div className="keyboard__body">
          {rows.map((row, index) => (
            <div key={index} className="keyboard__line">
              {row.map((item, index) => (
                <div
                  key={index}
                  // className={
                  //   activeButton === item[0] ? item[1] + " active" : item[1]
                  // }
                  className={
                    activeButton === item[0] ? item[1] + " active" : item[1]
                  }>
                  {item[0]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
