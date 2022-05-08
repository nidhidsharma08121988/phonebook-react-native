import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import Header from '../components/Header'
import { renderInContextWrapper } from './../test_data/customRenderFunction'

describe('header', () => {
  it('should display title', () => {
    const title = 'Hello'
    const { queryByText } = renderInContextWrapper(<Header title={title} />)
    const myTitle = queryByText(title)
    expect(myTitle).toBeTruthy()
  })
  it('should display search bar', () => {
    const { queryByTestId } = renderInContextWrapper(<Header />)
    const search = queryByTestId('search-bar')
    expect(search).toBeTruthy()
  })
  it('should display add button', () => {
    const { queryByTestId } = renderInContextWrapper(<Header />)
    const addBtn = queryByTestId('add-btn')
    expect(addBtn).toBeTruthy()
  })
})
