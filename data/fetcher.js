const baseUrl = 'http://localhost:8000'
export const fetchWithResponse = (url, options) => fetch(`${baseUrl}/${url}`, options).then(res => res.json())
export const fetchWithoutResponse = (url, options) => fetch(`${baseUrl}/${url}`, options)
