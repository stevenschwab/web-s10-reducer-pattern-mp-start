import React, { useReducer } from 'react'

const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

const initialState = {
  
}

// 👇 create your reducer function here

export default function TodoForm({ createQuote = () => { } }) {
  // 👇 use the reducer hook to spin up state and dispatch

  const onChange = () => {
    // 👇 implement
  }
  const resetForm = () => {
    // 👇 implement
  }
  const onNewQuote = () => {
    // 👇 implement
    resetForm()
  }

  // 👇 some props are missing in the JSX below:
  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
          type='text'
          name='authorName'
          placeholder='type author name'
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          type='text'
          name='quoteText'
          placeholder='type quote'
          onChange={onChange}
        />
      </label>
      <label><span>Create quote:</span>
        <button
          role='submit'
        >DO IT!</button>
      </label>
    </form>
  )
}
