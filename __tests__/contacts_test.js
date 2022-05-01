import React from 'react'
import { render } from '@testing-library/react-native'
import Contacts from '../components/Contacts'

describe('Contacts', () => {
  test('should display Name as heading when no prop', () => {
    const { queryByText } = render(<Contacts />)
    expect(queryByText('Name')).toBeTruthy()
  })
  test('should display heading provided in props', () => {
    const { queryByText } = render(<Contacts heading='Contacts Heading' />)
    expect(queryByText('Contacts Heading')).toBeTruthy()
  })
  test('should display No contacts to display if no contacts in props', () => {
    const { queryByText } = render(<Contacts />)
    const textNoContacts = queryByText(/No contacts to display/i)
    expect(textNoContacts).toBeTruthy()
  })
})
