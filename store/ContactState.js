import React, { createContext, useReducer } from 'react'
import contactReducer from './contactReducer'

const initialState = {}
export const ContactContext = createContext(initialState)

const ContactState = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer)
  const fetchContacts = () => {
    const data = getContactsFromApi()
    dispatch({
      type: SET_FETCHED_CONTACT,
      payload: data,
    })
  }
  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, fetchContacts }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export default ContactState
