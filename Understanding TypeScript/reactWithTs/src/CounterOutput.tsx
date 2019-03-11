import * as React from "react";

interface ICounterOutputProps {
  counter: number;
}

const CounterOutput = (props: ICounterOutputProps) => {
  return <p style={{ textAlign: "center" }}>{props.counter}</p>;
};

export default CounterOutput;
