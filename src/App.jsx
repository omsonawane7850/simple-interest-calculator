import { useState } from "react";

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
    <div>
      <h2>Simple Calculator</h2>
      <p>Calculate your Simple Interest Easily</p>

      <div>
        <h1>₹ {interest}</h1>
        <p>Total simple interest</p>
      </div>

      <div>
        <label>₹ Principal amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>

      <div>
        <label>Rate of interest (p.a) %</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

      <div>
        <label>Time period (Yr)</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button onClick={calculateInterest}>CALCULATE</button>

      <button onClick={resetCalculator}>RESET</button>
    </div>
  );
}

export default App;
