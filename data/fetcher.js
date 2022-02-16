const baseUrl = 'http://localhost:8000'
const checkError = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res
}

const catchError = (err) => {
  console.log(err)
  window.location.href = "/login"
}

export const fetchWithResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
  .then(res => res.json())
  .catch(catchError)

export const fetchWithoutResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
