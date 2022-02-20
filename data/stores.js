import { fetchWithResponse } from './fetcher'

export function getStores() {
  return fetchWithResponse('api/stores', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function getStoreById(id) {
  return fetchWithResponse(`api/stores/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function addStore(store) {
  return fetchWithResponse(`api/stores`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(store)
  })
}
