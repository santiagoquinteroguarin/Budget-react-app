import React, { useState } from 'react';
import './index.css';
import Question from './components/Question';
import Form from './components/Form';

function App() {

  // ?6. state defined - budget, remaining
  const [budget, setSavedBudget] = useState(0);
  const [remaining, setSavedRemaining] = useState(0);
  // ?7.
  const [showquestion, setUpdateQuestion] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto Semanal</h1>

        <div className="main-content content">
          {showquestion ? (
            <Question 
              // ?6.
              setSavedBudget={setSavedBudget}
              setSavedRemaining={setSavedRemaining}
              setUpdateQuestion={setUpdateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>

              <div className="one-half column">

              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
