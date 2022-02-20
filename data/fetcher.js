const baseUrl = 'http://localhost:8000'
const checkError = (res) => {
  // if (!res.ok && res.status === 401) {
    // throw Error(res.statusText);
  // }
  return res
}

const catchError = () => {
  window.location.href = "/login"
}

export const fetchWithResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
  .then(res => res.json())
  .catch(catchError)

export const fetchWithoutResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
