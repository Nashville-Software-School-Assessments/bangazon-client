import { fetchWithResponse } from './fetcher'

export function getProducts(query=undefined) {
  const url = 'api/products'
  
  if (query) {
    url += `?${query}`
  }

  return fetchWithResponse(url, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function getCategories() {
  return fetchWithResponse('api/categories', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
