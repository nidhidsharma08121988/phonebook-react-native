import { getContactsFromApi } from '../network_calls/apiCalls'
import axios from 'axios'

jest.mock('axios')
describe('API Calls', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('should return empty array if get request fails', () => {
    axios.get.mockRejectedValueOnce(new Error('Axios failed'))
    expect(getContactsFromApi()).toEqual([])
  })
})
