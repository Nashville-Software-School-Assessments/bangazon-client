import { fetchWithResponse } from "./fetcher"


export function useLogin() {
  const { data, error } = useSWR('/api/login', fetchWithResponse)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
