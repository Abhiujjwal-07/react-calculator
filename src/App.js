import { useState } from "react";

function App() {
  const [num, setAbhi] = useState(0);
  const [oldAbhi, setoldAbhi] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setAbhi(input);
    } else {
      setAbhi(num + input);
    }
  }

  function clear() {
    setAbhi(0);
  }

  function percentage() {
    setAbhi(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setAbhi(-num);
    } else {
      setAbhi(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setoldAbhi(num);
    setAbhi(0);
  }

  function calculate() {
    if (operator === "/") {
      setAbhi(parseFloat(oldAbhi) / parseFloat(num));
    } else if (operator === "X") {
      setAbhi(parseFloat(oldAbhi) * parseFloat(num));
    } else if (operator === "-") {
      console.log(oldAbhi);
      console.log(num);
      console.log(oldAbhi - num);
      setAbhi(parseFloat(oldAbhi) - parseFloat(num));
    } else if (operator === "+") {
      setAbhi(parseFloat(oldAbhi) + parseFloat(num));
    }
  }

  return (
    <div className="FullBo">
      <h1 className="opperation">{num}</h1>
      <button onClick={clear}>AC</button>
      <button onClick={changeSign}>+/-</button>
      <button onClick={percentage}>%</button>
      <button className="orange" onClick={operatorHandler} value="/">
        /
      </button>
      <button className="gray" onClick={inputNum} value={7}>
        7
      </button>
      <button className="gray" onClick={inputNum} value={8}>
        8
      </button>
      <button className="gray" onClick={inputNum} value={9}>
        9
      </button>
      <button className="orange" onClick={operatorHandler} value="X">
        X
      </button>
      <button className="gray" onClick={inputNum} value={4}>
        4
      </button>
      <button className="gray" onClick={inputNum} value={5}>
        5
      </button>
      <button className="gray" onClick={inputNum} value={6}>
        6
      </button>
      <button className="orange" onClick={operatorHandler} value="-">
        -
      </button>
      <button className="gray" onClick={inputNum} value={1}>
        1
      </button>
      <button className="gray" onClick={inputNum} value={2}>
        2
      </button>
      <button className="gray" onClick={inputNum} value={3}>
        3
      </button>
      <button className="orange" onClick={operatorHandler} value="+">
        +
      </button>
      <button className="gray111" onClick={inputNum} value={0}>
        0
      </button>
      <button className="gray" onClick={inputNum} value={"."}>
        .
      </button>

      <button className="orange111" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default App;
