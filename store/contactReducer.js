import React from 'react'
import { FETCH_CONTACTS } from './types'

const contactReducer = (state, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      }
    default:
      return state
  }
}

export default contactReducer
