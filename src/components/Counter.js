import React from 'react';

const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff}) => {

  //기본적으로 input은 문자열이라 숫자로 변경해야함 -> parseInt
  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange}/>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
