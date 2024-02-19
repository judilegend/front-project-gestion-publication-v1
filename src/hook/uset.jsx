import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'http://localhost:5000/user/signup',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const json = response.data;

      if (!response.status === 200) {
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

  return { signup, isLoading, error };
};
