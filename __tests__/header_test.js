import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import Header from '../components/Header'
import ContactState from '../store/ContactState'

describe('header', () => {
  it('should display title', () => {
    const title = 'Hello'
    const { queryByText } = render(
      <ContactState>
        <Header title={title} />
      </ContactState>
    )
    const myTitle = queryByText(title)
    expect(myTitle).toBeTruthy()
  })
  it('should display search bar', () => {
    const { queryByTestId } = render(
      <ContactState>
        <Header />
      </ContactState>
    )
    const search = queryByTestId('search-bar')
    expect(search).toBeTruthy()
  })
  it('should display add button', () => {
    const { queryByTestId } = render(
      <ContactState>
        <Header />
      </ContactState>
    )
    const addBtn = queryByTestId('add-btn')
    expect(addBtn).toBeTruthy()
  })
})
