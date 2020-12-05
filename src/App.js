import React from 'react';
import './index.css';
import Question from './components/Question';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Presupuesto Semanal</h1>

        <div className="main-content content">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;
