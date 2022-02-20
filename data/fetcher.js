const baseUrl = 'http://localhost:8000'
const checkError = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res
}

const catchError = (err) => {
  if (err === 401) {
    window.location.href = "/login"
  }
}

export const fetchWithResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
  .then(res => res.json())
  .catch(catchError)

export const fetchWithoutResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
