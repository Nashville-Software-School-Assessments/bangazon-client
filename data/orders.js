import { fetchWithResponse } from './fetcher'

export function getCart() {
  return fetchWithResponse('api/orders/current', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
