import React, {useState} from 'react'

const Control = ({func, func2}) => {

    // div 태그 없이 성능이 걸리니까 <></> 빈태그를 사용함. , 이것은 계속 많이 사용해도 부하가 걸리지 않음

    // 자식에서 부모에게 값을 변경해서 전달하는 방법 ?
    // 함수로 변경해서 전달해준다

  return (

      <>
      {/* <div className="header"></div>
      <div className="body"></div>
      <div className="footer"></div> */}

             {/* 숫자 올리기 */}
        <button onClick={() => {
            func("increase")
        }}>+</button>

        {/* 숫자 내리기 */}
        <button onClick={() => {
            func("decrease")
        }}
        >-</button>

        {/* 초기화 버튼 */}
        <button onClick={() => {
            func("init");
            func2([]);
        }}
        >초기화</button> 
      </>

  )

}

export default Control;
