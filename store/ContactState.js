import React, { createContext, useReducer } from 'react'
import contactReducer from './contactReducer'

const initialState = {
  contacts: [
    { id: '1', name: 'Pahi', phone: '+91-8175323462' },
    { id: '2', name: 'Pari', phone: '+91-8175323562' },
    { id: '3', name: 'Ishaan', phone: '+91-7175323562' },
  ],
}
export const ContactContext = createContext(initialState)

const ContactState = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer)
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {children}
    </ContactContext.Provider>
  )
}

export default ContactState
