import { fetchWithResponse } from "./fetcher";

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
