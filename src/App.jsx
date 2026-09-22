import { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(0);

  const calculateInterest = () => {
    if (!principal || !rate || !time) {
      alert("Please fill all the fields");
      return;
    }

    const result = (principal * rate * time) / 100;
    setInterest(result);
  };

  const resetCalculator = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setInterest(0);
  };

  return (
    <div className="container">
      <div className="calculator">
        <h2>Simple Calculator</h2>
        <h3>Calculate your Simple Interest Easily</h3>

        <div className="result">
          <h1>₹ {interest}</h1>
          <p>Total interest</p>
        </div>

        <div className="input-group">
          <label>₹ Principal amount</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Rate of interest (p.a) %</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Time period (Yr)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button onClick={calculateInterest}>CALCULATE</button>
          <button onClick={resetCalculator}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
