import { useState } from 'react';
import './State.css';



export default function State() {

  const [text, setText] = useState("I'm the first");
  const [count, setCount] = useState(1);

  function changeText() {
    setText("I'm the second");
  }

  return (
    <>
      <div onClick={changeText}>{text}</div>
      <div onClick={() => setCount(count + 1)}>{count}</div>
    </>
  );
}
