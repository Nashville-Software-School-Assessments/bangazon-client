import { fetchWithResponse } from './fetcher'

export function getStores() {
  return fetchWithResponse('api/stores', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
