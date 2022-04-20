import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function getPaymentTypes() {
  return fetchWithResponse('api/payment-types', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function addPaymentType(paymentType) {
  return fetchWithResponse(`api/payment-types`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentType)
  })
}

export function deletePaymentType(id) {
  return fetchWithoutResponse(`api/payment-types/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
