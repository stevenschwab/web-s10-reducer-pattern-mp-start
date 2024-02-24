import React, { useReducer } from 'react'

const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

const initialState = {
  authorName: '',
  quoteText: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { 
        ...state,
        authorName: action.payload.authorName,
        quoteText: action.payload.quoteText
      }
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

export default function TodoForm({ createQuote }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
