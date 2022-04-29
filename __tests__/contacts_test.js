import React from 'react'
import { render } from '@testing-library/react-native'
import Contacts from '../components/Contacts'

describe('Contacts', () => {
  test('should display Name as heading', () => {
    const { queryByText } = render(<Contacts heading='Name' />)
    expect(queryByText('Name')).toBeTruthy()
  })
  // test('should display list of contacts', () => {
  //   const contacts = []
  //   const { queryByText } = render(<Contacts items={contacts} heading='Name' />)
  //   expect(queryByText('Name')).toBeTruthy()
  // })
})
