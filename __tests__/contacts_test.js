import React from 'react'
import { render } from '@testing-library/react-native'
import Contacts from '../components/Contacts'

describe('Contacts', () => {
  test('should display Name as heading', () => {
    const contacts = []
    const { queryByText } = render(<Contacts items={contacts} />)
    expect(queryByText('Name')).toBeTruthy()
  })
  test('should display heading provided by props', () => {
    const { queryByText } = render(<Contacts heading='Contacts Heading' />)
    expect(queryByText('Contacts Heading')).toBeTruthy()
  })
})
