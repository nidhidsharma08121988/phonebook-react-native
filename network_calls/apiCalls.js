import axios from 'axios'
import { BASE_URL } from './../network_calls/url'

export const getContactsFromApi = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/Contacts`)
    const data = await res.data
    return data
  } catch (error) {
    return []
  }
}
