import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from 'uuid/v4';


// const initialExpenses = [
//   { id: uuid(), charge: 'rent', amount: 1600 },
//   { id: uuid(), charge: 'car payment', amount: 400 },
//   { id: uuid(), charge: 'credit card bill', amount: 1200 }
// ]
const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

function App() {
  //----- state value-----
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);
  // useEffect
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])
  //----- functionality-----
  const handleCharge = e => {
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpense = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item
        })
        setExpenses(tempExpense);
        setEdit(false);
        handleAlert({ type: 'success', text: 'item edited !' });
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: 'success', text: 'item added !' });
      }
      setCharge('');
      setAmount('');
    } else {
      //handle alert called
      handleAlert({ type: 'danger', text: `charge can't be empty value and amount value has to be bigger than zero` })
    }
  }
  // Clear All Items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items deleted" });
  }
  // Handle delete
  const handleDelete = (id) => {
    let tempExpense = expenses.filter(expense => expense.id !== id);
    setExpenses(tempExpense);
    handleAlert({ type: "danger", text: "Item Deleted" });
  }
  // Handle Edit
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }
  return (
    <Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budge calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} expenses={expenses} handleSubmit={handleSubmit} edit={edit} />
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} />
      </main>
      <h1>
        total spending : <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </Fragment>
  );
}

export default App;
