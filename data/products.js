import { fetchWithResponse, fetchWithoutResponse } from './fetcher'

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

export function getProductById(id) {
  return fetchWithResponse(`api/products/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function addProductToOrder(id) {
  return fetchWithResponse(`api/products/${id}/add_to_order`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function removeProductFromOrder(id) {
  return fetchWithoutResponse(`api/products/${id}/remove_from_order`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function rateProduct(productId, rating) {
  return fetchWithResponse(`api/products/${productId}/rate-product`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rating)
  })
}
