import React, { useEffect, useState } from "react";
import "../styles/components/keyboard.scss";

export const KeyBoard = () => {
  const row1 = [
    ["~", "key"],
    ["1", "key"],
    ["2", "key"],
    ["3", "key"],
    ["4", "key"],
    ["5", "key"],
    ["6", "key"],
    ["7", "key"],
    ["8", "key"],
    ["9", "key"],
    ["0", "key"],
    ["-", "key"],
    ["=", "key"],
    ["Backspace", "key backspace"],
  ];
  const row2 = [
    ["Tab", "key tab"],
    ["q", "key"],
    ["w", "key"],
    ["e", "key"],
    ["r", "key"],
    ["t", "key"],
    ["y", "key"],
    ["u", "key"],
    ["i", "key"],
    ["o", "key"],
    ["p", "key"],
    ["[", "key"],
    ["]", "key"],
    ["  ", "key"],
  ];
  const row3 = [
    ["CapsLock", "key capsLock"],
    ["a", "key"],
    ["s", "key"],
    ["d", "key"],
    ["f", "key"],
    ["g", "key"],
    ["h", "key"],
    ["j", "key"],
    ["k", "key"],
    ["l", "key"],
    [";", "key"],
    ["'", "key"],
    ["Enter", "key enter"],
  ];
  const row4 = [
    ["Shift", "key lshift"],
    ["z", "key"],
    ["x", "key"],
    ["c", "key"],
    ["v", "key"],
    ["b", "key"],
    ["n", "key"],
    ["m", "key"],
    [",", "key"],
    [".", "key"],
    ["/", "key"],
    ["Shift", "key rshift"],
  ];
  const row5 = [
    ["Ctrl", "key ctrl"],
    ["Fn", "key fn"],
    ["Win", "key win"],
    ["Alt", "key alt"],
    [" ", "key space"],
    ["Alt", "key alt"],
    ["Ctrl", "key ctrl"],
    ["Home", "key"],
    ["Arr", "key"],
    ["End", "key"],
  ];
  const rows = [[...row1], [...row2], [...row3], [...row4], [...row5]];
  const str =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio inventore, aut necessitatibus a sed sapiente repudiandae, sunt amet consequuntur iste illum iusto culpa id excepturi, cupiditate reprehenderit ratione laudantium.";

  const [indexLetter, setIndexLetter] = useState(0);
  const [wrongIndexLetter, setWrongIndexLetter] = useState([]);
  const [notPressetLetters, setNotPressetLetters] = useState(str);
  const [pressetLetters, setPressetLetters] = useState("");
  const [activeButton, setActiveButton] = useState("");

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

    if (e.key === str[indexLetter]) {
      countingLetters();
    }
    if (!(e.key === str[indexLetter])) {
      countingLetters();
      setWrongIndexLetter([...wrongIndexLetter, indexLetter]);
    }

    setActiveButton(e.key);
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
