import React from 'react'
import 'react-native'
import {render} from '@testing-library/react-native'
import Header from '../components/Header'

describe('header', () => {
  it('should display title', () => {
    const title = "Hello" 
    const {queryByText} = render(
      <Header title={title} searchBar={true} />
    )
    const myTitle = queryByText(title)
    expect(myTitle).toBeTruthy()
  })
  it('should display search bar', () => {
    const {queryByTestId} = render(  
    <Header searchBar={true} />
   )
   const search = queryByTestId('search-bar')
   expect(search).toBeTruthy()
  })
  it('should display add button', () => {})
})
