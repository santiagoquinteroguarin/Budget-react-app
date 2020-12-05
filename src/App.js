import React, { useState } from 'react';
import './index.css';
import Question from './components/Question';

function App() {

  // ?6. state defined - budget, remaining
  const [budget, setSavedBudget] = useState(0);
  const [remaining, setSavedRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto Semanal</h1>

        <div className="main-content content">
          <Question 
            // ?6.
            setSavedBudget={setSavedBudget}
            setSavedRemaining={setSavedRemaining}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
