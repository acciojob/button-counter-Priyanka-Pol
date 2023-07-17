
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [a, setA] = useState(0)
  function bnt() {
    setA(a+1)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Button clickes {a} timesa</h1>

        <button onClick = {btn}>Click Me</button>
    </div>
  )
}

export default App
