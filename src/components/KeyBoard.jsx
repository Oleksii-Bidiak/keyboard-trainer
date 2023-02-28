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
    ["y", "key"],
    ["y", "key"],
    ["u", "key"],
    ["i", "key"],
    ["o", "key"],
    ["p", "key"],
    ["[", "key"],
    ["]", "key"],
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
    ["Shift", "key rshift"],
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
    ["Shift", "key lshift"],
  ];
  const row5 = [
    ["Ctrl", "key ctrl"],
    ["Fn", "key fn"],
    ["Win", "key win"],
    ["Alt", "key alt"],
    ["", "key space"],
    ["Alt", "key alt"],
    ["Ctrl", "key ctrl"],
    ["Home", "key"],
    ["Arr", "key"],
    ["End", "key"],
  ];
  const rows = [[...row1], [...row2], [...row3], [...row4], [...row5]];

  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const onKeypress = (e) => {
      // console.log(e);
      if (e.keyCode == 13) {
        console.log("Enter press");
      }
      setActiveButton(e.key);
    };

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, []);

  return (
    <div className="keyboard">
      <div className="keyboard__container">
        <div className="keyboard__body">
          {rows.map((row, index) => (
            <div key={index} className="keyboard__line">
              {row.map((item, index) => (
                <div
                  key={index}
                  className={
                    activeButton === item[0] ? item[1] + " active" : item[1]
                  }
                  onKeyDown={(e) => console.log("ok")}>
                  {item[0]}
                </div>
              ))}
            </div>
          ))}
          {/* <div className="keyboard__line">
            <div className="keyboard__key">~</div>
            <div className="keyboard__key">1</div>
            <div className="keyboard__key">2</div>
            <div className="keyboard__key">3</div>
            <div className="keyboard__key">4</div>
            <div className="keyboard__key">5</div>
            <div className="keyboard__key">6</div>
            <div className="keyboard__key">7</div>
            <div className="keyboard__key">8</div>
            <div className="keyboard__key">9</div>
            <div className="keyboard__key">10</div>
            <div className="keyboard__key">-</div>
            <div className="keyboard__key">+</div>
            <div className="keyboard__key backspace">Backspace</div>
          </div>
          <div className="keyboard__line">
            <div className="keyboard__key tab">Tab</div>
            <div className="keyboard__key">q</div>
            <div className="keyboard__key">w</div>
            <div className="keyboard__key">e</div>
            <div className="keyboard__key">r</div>
            <div className="keyboard__key">t</div>
            <div className="keyboard__key">y</div>
            <div className="keyboard__key">u</div>
            <div className="keyboard__key">i</div>
            <div className="keyboard__key">o</div>
            <div className="keyboard__key">p</div>
            <div className="keyboard__key">[</div>
            <div className="keyboard__key">]</div>
            <div className="keyboard__key plug"></div>
          </div>
          <div className="keyboard__line">
            <div className="keyboard__key capsLock">CapsLock</div>
            <div className="keyboard__key">a</div>
            <div className="keyboard__key">s</div>
            <div className="keyboard__key">d</div>
            <div className="keyboard__key">f</div>
            <div className="keyboard__key">g</div>
            <div className="keyboard__key">h</div>
            <div className="keyboard__key">j</div>
            <div className="keyboard__key">k</div>
            <div className="keyboard__key">l</div>
            <div className="keyboard__key">;</div>
            <div className="keyboard__key">'</div>
            <div className="keyboard__key enter">Enter</div>
          </div>
          <div className="keyboard__line">
            <div className="keyboard__key lshift">Shift</div>
            <div className="keyboard__key">z</div>
            <div className="keyboard__key">x</div>
            <div className="keyboard__key">c</div>
            <div className="keyboard__key">v</div>
            <div className="keyboard__key">b</div>
            <div className="keyboard__key">n</div>
            <div className="keyboard__key">m</div>
            <div className="keyboard__key">,</div>
            <div className="keyboard__key">.</div>
            <div className="keyboard__key">/</div>
            <div className="keyboard__key rshift">Shift</div>
          </div>
          <div className="keyboard__line">
            <div className="keyboard__key ctrl">Ctrl</div>
            <div className="keyboard__key fn">Fn</div>
            <div className="keyboard__key win">Win</div>
            <div className="keyboard__key alt">Alt</div>
            <div className="keyboard__key space"></div>
            <div className="keyboard__key alt">Alt</div>
            <div className="keyboard__key ctrl">Ctrl</div>
            <div className="keyboard__key"></div>
            <div className="keyboard__key"></div>
            <div className="keyboard__key"></div>
            <div className="keyboard__key"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
