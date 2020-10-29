import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

const CounterContainer = () => {

  const {number, diff} = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  const dispatch = useDispatch();

  const onSetDiff = diff => dispatch(setDiff(diff));
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <div>
      <Counter number={number}
               diff={diff}
               onSetDiff={onSetDiff}
               onIncrease={onIncrease}
               onDecrease={onDecrease}
      />
    </div>
  );
};

export default CounterContainer;
