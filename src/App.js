import React, { useState, useEffect } from 'react';
import './index.css';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {

  // ?6. state defined - budget, remaining
  const [budget, setSavedBudget] = useState(0);
  const [remaining, setSavedRemaining] = useState(0);
  // ?7.
  const [showquestion, setUpdateQuestion] = useState(true);
  // ?12. 
  const [expenses, setSavedExpenses] = useState([]);
  const [expense, setSavedExpense] = useState([]);
  const [createExpense, setSavedCreateExpense] = useState(false);

  // ?20. useEffect for update the remaining
  useEffect(() => {
    if(createExpense) {

      // add the new budget
      setSavedExpenses([
        ...expenses,
        expense
      ]);

      // subtracting of current budget
      const remainigBudget = remaining - expense.amount;
      setSavedRemaining(remainigBudget);

      // reset to false
      setSavedCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);

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
                <Form 
                  setSavedExpense={setSavedExpense}
                  setSavedCreateExpense={setSavedCreateExpense}
                />
              </div>

              <div className="one-half column">
                <List 
                  expenses={expenses}
                />

                <ControlBudget 
                  budget={budget}
                  remaining={remaining}
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
