import { getContactsFromApi } from '../network_calls/apiCalls'
import axios from 'axios'
import { waitFor } from '@testing-library/react-native'

const contacts = [
  { id: '1', name: 'Pahi', phone: '+91-8175323462' },
  { id: '2', name: 'Pari', phone: '+91-8175323562' },
  { id: '3', name: 'Ishaan', phone: '+91-7175323562' },
]

jest.mock('axios')

describe('API Calls', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('should return empty array if get request fails', async () => {
    axios.get.mockRejectedValueOnce()
    const data = await getContactsFromApi()
    expect(data).toEqual([])
  })
  test('should return contacts if get request is successful', async () => {
    axios.get.mockResolvedValueOnce(contacts)
    const data = await getContactsFromApi()
    expect(data).toEqual(contacts)
  })
})
