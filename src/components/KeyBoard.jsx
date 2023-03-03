import { act } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "../styles/components/keyboard.scss";
import { rows } from "../utils/keys";

export const KeyBoard = ({ startText }) => {
  const [indexLetter, setIndexLetter] = useState(0);
  const [wrongIndexLetter, setWrongIndexLetter] = useState([]);
  const [notPressetLetters, setNotPressetLetters] = useState(startText);
  const [pressetLetters, setPressetLetters] = useState("");
  const [activeButton, setActiveButton] = useState([]);

  const countingLetters = () => {
    const chengeStr = notPressetLetters.slice(1);
    const firstLetter = pressetLetters + notPressetLetters[0];
    setIndexLetter(indexLetter + 1);
    setNotPressetLetters(chengeStr);
    setPressetLetters(firstLetter);
  };

  const onKeypress = (e) => {
    // console.log(e);
    // if (e.keyCode === 13) {
    //   console.log("Enter press");
    // }

    if (e.key === startText[indexLetter]) {
      countingLetters();
    }
    if (!(e.key === startText[indexLetter])) {
      countingLetters();
      setWrongIndexLetter([...wrongIndexLetter, indexLetter]);
    }

    setActiveButton([...activeButton, e.key]);
  };

  const keyup = () => {
    setTimeout(() => {
      setActiveButton((activeButton) => {
        if (activeButton) {
          activeButton.shift();
          setActiveButton([...activeButton.splice(1)]);
        }
      });
    }, 300);
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeypress);
    document.addEventListener("keyup", keyup);

    return () => {
      document.removeEventListener("keypress", onKeypress);
      document.removeEventListener("keyup", keyup);
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
                  className={
                    activeButton &&
                    activeButton[activeButton.length - 1] === item[0]
                      ? item[1] + " active"
                      : item[1]
                  }
                  onKeypress={() => console.log("presset")}>
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
