import React, { useState } from "react";
import Styles from "./BudgetScreens.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BudgetScreen = () => {
  const [keyValue, setKeyValue] = useState("");

  // 키패드 기능 들어가야됨
  const keyPadClickHandler = (e) => {
    console.log("key:", e.target.value);
    setKeyValue(keyValue + e.target.value);
    // const number = document.querySelector("#key");

    // console.log("number:", number);
  };

  const keyPadBackSpaceHandler = () => {
    setKeyValue(keyValue.slice(0, -1));

    // setKeyValue(keyValue[])
  };

  return (
    <div className="budget-wrap">
      <h3 className="budget-title">예산</h3>
      <button
        id="backSpace-button"
        class="btn btn-light"
        onClick={() => {
          keyPadBackSpaceHandler();
        }}
      >
        -
      </button>
      <div className="result-number">{keyValue}</div>
      <div className="budget-container">
        <div className="pad-container">
          <div className="key-pad">
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={1}
              className="1"
              class="btn btn-light"
            >
              1
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={2}
              className="2"
              class="btn btn-light"
            >
              2
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={3}
              className="3"
              class="btn btn-light"
            >
              3
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={4}
              className="4"
              class="btn btn-light"
            >
              4
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={5}
              className="5"
              class="btn btn-light"
            >
              5
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={6}
              className="6"
              class="btn btn-light"
            >
              6
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={7}
              className="7"
              class="btn btn-light"
            >
              7
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={8}
              className="8"
              class="btn btn-light"
            >
              8
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={9}
              className="9"
              class="btn btn-light"
            >
              9
            </button>
            <button id="key" className="#" class="btn btn-light" disabled>
              *
            </button>
            <button
              id="key"
              onClick={(e) => {
                keyPadClickHandler(e);
              }}
              value={0}
              className="0"
              class="btn btn-light"
            >
              0
            </button>
            <button id="key" className="#" class="btn btn-light" disabled>
              #
            </button>
          </div>
        </div>
        <button
          id="next"
          onClick={() => {
            window.location.href = "/3";
          }}
          class="btn btn-primary"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default BudgetScreen;
