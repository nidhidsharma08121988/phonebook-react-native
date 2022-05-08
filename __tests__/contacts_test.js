import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import Contacts from '../components/Contacts'
import ContactState from '../store/ContactState'
import fetchMock from 'jest-fetch-mock'
import { renderInContextWrapper } from '../test_data/customRenderFunction'

fetchMock.enableMocks()

const contacts = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
]

describe('Contacts', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  afterEach(() => {
    fetchMock.resetMocks()
  })

  test('should display Name as heading when no prop', () => {
    const { queryByText } = render(
      <ContactState>
        <Contacts />
      </ContactState>
    )
    expect(queryByText('Name')).toBeTruthy()
  })
  test('should display heading provided in props', () => {
    const { queryByText } = renderInContextWrapper(
      <Contacts heading='Contacts Heading' />
    )
    expect(queryByText('Contacts Heading')).toBeTruthy()
  })
  test('should display No contacts to display if no contacts are received', () => {
    fetchMock.mockReject('Network error')

    const { queryByText } = renderInContextWrapper(<Contacts />)
    const textNoContacts = queryByText(/No contacts to display/i)
    expect(textNoContacts).toBeTruthy()
  })
  test('should display list of contacts if contacts are received by component', async () => {
    fetchMock.mockResponse(() => Promise.resolve(JSON.stringify(contacts)))

    const { queryAllByTestId } = renderInContextWrapper(<Contacts />)

    await waitFor(() => {
      const contactItems = queryAllByTestId('contact-item')
      expect(contactItems.length).toBe(3)
    })
  })
})
