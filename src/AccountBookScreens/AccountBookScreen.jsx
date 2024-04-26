import React, { useEffect, useState } from "react";
import Styles from "./AccountBookScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountBookScreen = () => {
  const [canPayMoney, setCanPayMoney] = useState(0);
  const [payedItem, setPayedItem] = useState("");
  const [payedMoney, setPayedMoney] = useState(0);
  const [payedItemList, setPayedItemList] = useState([]);
  const [usedResultMoney, setUsedResultMoney] = useState(0);

  const initItemState = () => {
    setPayedItem("");
    setPayedMoney(0);
  };

  const payedMoneyInputHandler = (e) => {
    setPayedMoney(e.target.value);
  };

  const itemInputHandler = (e) => {
    setPayedItem(e.target.value);
  };

  const inputItemListHandler = () => {
    let temp = { payedItem: payedItem, payedMoney: payedMoney };

    let inputTemp = [...payedItemList, temp];

    setPayedItemList(inputTemp);

    initItemState();
    initInputValue();
  };

  const restMoneyMinimumHandler = (resultMoney) => {
    if (Number(canPayMoney) - Number(resultMoney) < 0) {
      window.alert("예산을 초과했습니다.");
      setPayedItemList(payedItemList.slice(0, -1));
    } else {
      // setUsedResultMoney(Number(canPayMoney) - Number(resultMoney));
      setCanPayMoney(Number(canPayMoney) - Number(resultMoney));
    }
  };

  const UsedResultMoney = () => {
    let resultMoney = 0;

    for (let i = 0; i < payedItemList.length; i++) {
      resultMoney += Number(payedItemList[i].payedMoney);
    }
    restMoneyMinimumHandler(resultMoney);
  };

  const initInputValue = () => {
    let input = document.getElementById("item");
    let input2 = document.getElementById("money");
    input.value = null;
    input2.value = null;
  };

  const canPayMoneyRegistration = () => {
    setCanPayMoney(Number(localStorage.getItem("budget")));
    console.log("초기값 : ", canPayMoney);
  };

  // 추가된 제품이 있으면 총 사용돈 업데이트하기
  useEffect(() => {
    console.log("payedItemList:", payedItemList);
    UsedResultMoney();
  }, [payedItemList]);

  useEffect(() => {
    canPayMoneyRegistration();
  }, []);

  return (
    <>
      <h3 className="canUseMoney">남은 돈 :{canPayMoney}</h3>
      <div className="Calculator">
        <input
          type="text"
          id="item"
          class="form-control"
          onChange={itemInputHandler}
          placeholder="무엇을 사셧나요?"
        />
        <input
          type="number"
          class="form-control"
          id="money"
          onChange={payedMoneyInputHandler}
          placeholder="가격을 입력하세요"
        />
      </div>
      <button
        type="button"
        onClick={inputItemListHandler}
        class="btn btn-light"
        id="button-1"
      >
        추가
      </button>

      <div className="payItemList-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">상품명</th>
              <th scope="col">가격</th>
            </tr>
          </thead>
          <tbody>
            {payedItemList.map((item, index) => {
              return (
                <tr>
                  <th scope="col">{item.payedItem}</th>
                  <th scope="col">{item.payedMoney}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AccountBookScreen;
