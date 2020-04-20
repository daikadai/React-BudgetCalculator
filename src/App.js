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
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <Fragment>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </Fragment>
  );
}

export default App;
