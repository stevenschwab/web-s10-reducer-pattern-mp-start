import React, { useReducer } from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'

const CREATE_QUOTE = 'CREATE_QUOTE'
const DELETE_QUOTE = 'DELETE_QUOTE'
const EDIT_QUOTE_AUTHENTICITY = 'EDIT_QUOTE_AUTHENTICITY'
const SET_HIGHLIGHTED_QUOTE = 'SET_HIGHLIGHTED_QUOTE'
const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

let id = 1
const getNextId = () => id++

const quotes = [
  {
    id: getNextId(),
    quoteText: "Don't cry because it's over, smile because it happened.",
    authorName: "Dr. Seuss",
    apocryphal: false,
  },
  {
    id: getNextId(),
    quoteText: "So many books, so little time.",
    authorName: "Frank Zappa",
    apocryphal: false,
  },
  {
    id: getNextId(),
    quoteText: "Be yourself; everyone else is already taken.",
    authorName: "Oscar Wilde",
    apocryphal: false,
  },
]

const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: quotes
}

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_QUOTE:
      return { 
        ...state, 
        quotes: state.quotes.concat({
          id: getNextId(),
          quoteText: action.payload.quoteText,
          authorName: action.payload.authorName,
          apocryphal: false,
        }) 
      }
    case DELETE_QUOTE:
      return { 
        ...state,
        quotes: state.quotes.filter(qt => {
          return qt.id !== action.payload.id;
        })
      }
    case EDIT_QUOTE_AUTHENTICITY:
      return { 
        ...state,
        quotes: state.quotes.map(qt => {
          if (qt.id === action.payload.id) {
            return { ...qt, apocryphal: !qt.apocryphal };
          }
          return qt;
        })
      }
    case SET_HIGHLIGHTED_QUOTE:
      return { 
        ...state,
        highlightedQuote: action.payload.id
      }
    case TOGGLE_VISIBILITY:
      return { 
        ...state,
        displayAllQuotes: !state.displayAllQuotes
      }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createQuote = ({ authorName, quoteText }) => {
    dispatch({ type: CREATE_QUOTE, payload: { authorName: authorName, quoteText: quoteText} })
  }
  const deleteQuote = id => {
    dispatch({ type: DELETE_QUOTE, payload: { id: id} })
  }
  const editQuoteAuthenticity = id => {
    dispatch({ type: EDIT_QUOTE_AUTHENTICITY, payload: { id: id } })
  }
  const setHighlightedQuote = id => {
    
  }
  const toggleVisibility = () => {
    // 👇 implement
  }

  const { quotes, highlightedQuote, displayAllQuotes } = state;

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
        quotes={quotes}
        highlightedQuote={highlightedQuote}
        displayAllQuotes={displayAllQuotes}
        deleteQuote={deleteQuote}
        editQuoteAuthenticity={editQuoteAuthenticity}
        setHighlightedQuote={setHighlightedQuote}
        toggleVisibility={toggleVisibility}
      />
      <QuoteForm
        createQuote={createQuote}
      />
    </div>
  )
}
