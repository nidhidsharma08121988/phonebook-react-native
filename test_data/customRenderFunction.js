import React from 'react'
import { render } from '@testing-library/react-native'
import ContactState from '../store/ContactState'

export const renderInContextWrapper = component => {
  return render(<ContactState>{component}</ContactState>)
}
