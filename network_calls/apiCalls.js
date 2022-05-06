import { BASE_URL } from './../network_calls/url'

export const getContactsFromApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}`)
    const data = await response.json()
    return data
  } catch (error) {
    return []
  }
}
