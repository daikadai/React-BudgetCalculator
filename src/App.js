import React, { Fragment, useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from 'uuid/v4';


const initialExpenses = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'credit card bill', amount: 1200 }
]

function App() {
  //----- state value-----
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  //----- functionality-----
  const handleCharge = e => {
    console.log(`charge: ${e.target.value}`);

    setCharge(e.target.value)
  }
  const handleAmount = e => {
    console.log(`amount: ${e.target.value}`);

    setAmount(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <Fragment>
      <Alert />
      <h1>budge calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} expenses={expenses} handleSubmit={handleSubmit} />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending : <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </Fragment>
  );
}

export default App;
