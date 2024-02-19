import { useState } from 'react';
// import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
  
    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const json = await response.json();
  
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      } else {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json));
  
        // update the auth context
        dispatch({ type: 'LOGIN', payload: json });
  
        // update loading state
        setIsLoading(false);
      }
    } catch (error) {
      // Handle non-JSON response or network error
      setIsLoading(false);
      setError('Unexpected error occurred. Please try again.');
    }
  };
  

  return { login, isLoading, error };
};
