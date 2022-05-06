import React, { createContext, useReducer, useEffect } from 'react'
import contactReducer from './contactReducer'
import { FETCH_CONTACTS } from './types'
import { getContactsFromApi } from '../network_calls/apiCalls'

const initialState = {
  contacts: [],
  fetchContacts: () => {},
}
export const ContactContext = createContext(initialState)

const ContactState = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState)

  useEffect(() => {
    fetchContacts()
  }, [])

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
