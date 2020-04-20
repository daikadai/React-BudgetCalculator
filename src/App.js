import React, { Fragment } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <Fragment>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </Fragment>
  );
}

export default App;
