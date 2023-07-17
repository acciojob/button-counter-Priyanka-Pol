
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [a, setA] = useState("");

  function bnt() {
    setA(a+1)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Button clicked {a} times</h1>

        <button onClick = {btn}>Click me</button>
    </div>
  )
}

export default App
