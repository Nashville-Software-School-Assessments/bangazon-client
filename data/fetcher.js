const baseUrl = 'http://localhost:8000'
const checkError = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res
}

const checkErrorJson = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  } else {
    return res.json()
  }
}


const catchError = (err) => {
  if (err.message === '401') {
    window.location.href = "/login"
  }
  if (err.message === '404') {
    return err
  }
}

export const fetchWithResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkErrorJson)
  .catch(catchError)

export const fetchWithoutResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
  .then(checkError)
  .catch(catchError)
