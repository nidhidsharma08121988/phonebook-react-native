import axios from 'axios'
import { BASE_URL } from './../network_calls/url'

export const getContactsFromApi = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/Contacts`)
    return res
  } catch (error) {
    return []
  }
}
