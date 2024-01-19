
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0)
  function Increment(){
    setCount(count+1);
  }
  return (
    <div>
    <h1>Button clicked {count} times</h1>

      <button onClick={Increment}>Click me</button>
    </div>
  )
}

export default App
