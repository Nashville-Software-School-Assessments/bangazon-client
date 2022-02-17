import { fetchWithResponse } from "./fetcher";

export function getPaymentTypes() {
  return fetchWithResponse('api/payment-types', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
