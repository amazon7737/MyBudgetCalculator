import React, { useCallback, useEffect, useState } from "react";
import Styles from "./Styles/MyPayFriend.css";
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * 사용할 수 있는 돈 : ~~얼마
 * 지불한 제품 이름 , 지불 금액
 * 내가 사용할 수 있는 돈 : ~~얼마
 *
 *
 */

const MyPayFriend = () => {
  const [canPayMoney, setCanPayMoney] = useState(0);
  const [payedItem, setPayedItem] = useState([]);
  const [payedMoney, setPayedMoney] = useState(0);

  const canPayMoneyRegistration = (e) => {
    setCanPayMoney(Number(e.target.value));
  };

  return (
    <div className="wrap">
      <h3>예산</h3>
      {/* // :&nbsp; */}
      <div className="canPayMoney">
        <h3 className="canPayMoneyView"> {canPayMoney}</h3>
      </div>

      <input
        type="number"
        id="useMoney"
        class="form-control"
        onChange={canPayMoneyRegistration}
        placeholder="사용할 수 있는 돈을 입력하세요"
      />

      {/* </div> */}
      <Calculator canPayMoney={canPayMoney} />
    </div>
  );
};

export default MyPayFriend;
