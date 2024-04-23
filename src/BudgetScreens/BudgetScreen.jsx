import React from "react";
import Styles from "./BudgetScreens.css";

const BudgetScreen = () => {
  // 키패드 기능 들어가야됨

  return (
    <div className="budget-wrap">
      <h3 className="budget-title">예산</h3>
      <div className="budget-container">
        <div className="result-number">123</div>
        <button className="next-button">다음</button>
      </div>
    </div>
  );
};

export default BudgetScreen;
