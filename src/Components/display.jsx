import React from 'react'

const Display = ({value}) => {
    //  props로 하면 네임을 계속 지정해야되서 지저분해질수 있지만 중괄호에 변수 이름만 적어주면됨.
  return (
    <>
        {/* 숫자 보여주기 */}
        {/* <h1>{number}</h1> */}
        <h1>값 :{value} </h1>

    </>
  )
}

export default Display;
