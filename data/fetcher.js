export const fetchWithResponse = (url, options) => fetch(url, options).then(res => res.json())
export const fetchWithoutResponse = (url, options) => fetch(url, options)
