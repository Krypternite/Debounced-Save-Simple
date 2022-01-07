import React, { useState, useRef, useCallback } from 'react';
import './style.css';
import { debounce } from 'lodash';

export default function App() {
  const [text, setText] = useState('');
  const [dbText, setDbText] = useState(text);
  // const handler = (e) => {
  //   const val = e.target.value;
  //   const a = debounce((e) => setText(val),1000);
  //   a();
  // };
  // const debouncedSave = useCallback(
  //   debounce((val) => setDbText(val), 2000),
  //   []
  // );

  const debouncedSave = useRef(
    debounce((val) => setDbText(val), 2000),
    []
  ).current;

  const handlerMain = (e) => {
    const val = e.target.value;
    setText(val);
    debouncedSave(val);
  };

  return (
    <div>
      <textarea value={text} onChange={handlerMain}></textarea>
      <div>{text}</div>
      <div>{dbText}</div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
