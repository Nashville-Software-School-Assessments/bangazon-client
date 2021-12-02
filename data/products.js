import { fetchWithResponse } from './fetcher'

export function getProducts() {
  return fetchWithResponse(`api/products`, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
