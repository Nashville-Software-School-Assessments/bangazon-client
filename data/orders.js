import { fetchWithoutResponse, fetchWithResponse } from './fetcher'

export function getCart() {
  return fetchWithResponse('api/orders/current', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function completeCurrentOrder(orderId, paymentTypeId) {
  fetchWithoutResponse(`api/orders/${orderId}/complete`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({paymentTypeId})
  })
}
