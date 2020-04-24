import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit, edit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input type="text" value={charge} onChange={handleCharge} className="form-control" id="charge" name="charge" placeholder="e.g. rent" />
        </div>
        <div className="form-group">
          <label htmlFor="charge">amount</label>
          <input type="text" value={amount} onChange={handleAmount} className="form-control" id="amount" name="amount" placeholder="e.g. 100" />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? 'edit' : 'submit'}
        <MdSend className="btn-icon" />
      </button>
    </form>
  )
}

export default ExpenseForm
