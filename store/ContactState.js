import React, { createContext, useReducer } from 'react'
import contactReducer from './contactReducer'
import { FETCH_CONTACTS } from './types'

const initialState = { contacts: [] }
export const ContactContext = createContext(initialState)

const ContactState = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer)

  const fetchContacts = async () => {
    const data = await getContactsFromApi()
    dispatch({
      type: FETCH_CONTACTS,
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
