import React, { useEffect, useState } from "react";
import Styles from "./AccountBookScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountBookScreen = () => {
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
    if (Number(canPayMoney.canPayMoney) - Number(resultMoney) < 0) {
      window.alert("예산을 초과했습니다.");
      setPayedItemList(payedItemList.slice(0, -1));
    } else {
      setUsedResultMoney(Number(canPayMoney.canPayMoney) - Number(resultMoney));
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

  // 추가된 제품이 있으면 총 사용돈 업데이트하기
  useEffect(() => {
    console.log("payedItemList:", payedItemList);
    UsedResultMoney();
  }, [payedItemList]);

  return <div className="Account-wrap"></div>;
};

export default AccountBookScreen;
