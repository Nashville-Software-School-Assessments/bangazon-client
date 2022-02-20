import { createContext, useContext, useEffect, useState } from 'react';
import { getUserProfile } from '../data/auth';

const AppContext = createContext();

export function AppWrapper({ children }) {
  console.log(children)
  const [profile, setProfile] = useState({})
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])
  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      getUserProfile().then((profileData) => setProfile(profileData))
    }
  }, [token])

  return (
    <AppContext.Provider value={{profile, token, setToken}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
