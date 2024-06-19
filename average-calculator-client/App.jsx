import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://localhost:3001/average', {
        numbers: numbers.split(',').map(Number),
      });
      setAverage(response.data.average);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      setAverage(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate Average</button>
        {average !== null && <h2>Average: {average}</h2>}
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      </header>
    </div>
  );
}

export default App;
