import React, { useEffect, useState } from 'react'
import Display from '../Components/display';
import Control from '../Components/control';
import Header from '../Components/Header';
import PopUp from '../Components/PopUp';

const Main = () => {

    const initNumber = 0;
    const [number, setNumber] = useState(0);
    const [numList, setNumList] = useState([]);
    const [isPopUp, setIsPopUp] = useState(false);



    const numberHandler = (TYPE) => {
        let tempNum = 0;

        switch (TYPE) {
            case "increase":
                tempNum = number + 1
                break;
            case "decrease":
                tempNum = number - 1
                break;
            case "init":
                tempNum = initNumber
                break;
            default:
                break;
        }

        if (tempNum <0){
            window.alert("숫자를 0보다 작게 설정 할 수 없습니다.");
        }else if(tempNum > 10){
            window.alert("!!!");
        }else{
            setNumber(tempNum);
        }

    }

    useEffect(() => {
        let tempList = [...numList, number];
        setNumList(tempList);

    }, [number]);

    useEffect(()=> {
        console.log(numList);
    },[numList]);

  return (

    <div id = "main">
        <Display value = {number} />
        <Control func = {numberHandler} func2 = {setNumList}/>

            {numList.map((item, index) => (
            <h3 key = {index}>item : {item}</h3>
            ))}
            <button onClick={() => {setIsPopUp(true)}}>팝업 열기</button>
            {isPopUp ?         
            (<PopUp title = {"임시 타이틀"} content = {"내용입니다."} btn1 = {"취소"} btn2={"확인"} func1={() => {setIsPopUp(false)}}
            func2={() => {window.alert("확인버튼을 눌렀습니다."); setIsPopUp(false);}}

            func3={() => {setIsPopUp(false)}}
            />)
            : (<></>)}
    </div>

  )
}

export default Main;
