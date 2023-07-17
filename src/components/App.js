
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [a, setA] = useState("0");

  function bnt() {
    setA(a+1)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {a} times</p>

        <button onClick = {btn}>Click me</button>
    </div>
  )
}

export default App
