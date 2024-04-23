import React from 'react';

import "./Styles/PopUp.css";


const PopUp = ({title, content, btn1, btn2, func1, func2 , func3}) => {
  return (
    <>

      <div className="popUpBg" onClick={func3}>

        <div className="popUp" onClick={(e) => {e.stopPropagation();}}>

            <h1>{title}</h1>

            <h1>{content}</h1>

            <div className="btnWrap">

                <button onClick = {func1} >{btn1}</button>

                <button onClick = {func2} >{btn2}</button>

            </div>

        </div>

      </div>

    </>
  )
}

export default PopUp;
