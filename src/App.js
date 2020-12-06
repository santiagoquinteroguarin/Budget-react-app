import React, { useState } from 'react';
import './index.css';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';

function App() {

  // ?6. state defined - budget, remaining
  const [budget, setSavedBudget] = useState(0);
  const [remaining, setSavedRemaining] = useState(0);
  // ?7.
  const [showquestion, setUpdateQuestion] = useState(true);
  // ?12. 
  const [expenses, setSavedExpenses] = useState([]);

  // ! when added a new expense
  const addNewExpense = (expense) => {
    setSavedExpenses([
      ...expenses,
      expense
    ])
  }

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
                <Form addNewExpense={addNewExpense}/>
              </div>

              <div className="one-half column">
                <List 
                  expenses={expenses}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
