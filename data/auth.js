import { fetchWithResponse } from "./fetcher"

export function login(user) {
  return fetchWithResponse('api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}

export function register(user) {
  return fetchWithResponse('api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}

export function getUserProfile() {
  return fetchWithResponse('api/profile/my-profile', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    }
  })
}
