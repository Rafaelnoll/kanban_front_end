import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

function useAuthentication() {
  const contextAuthentication = useContext(AuthenticationContext);

  if (!contextAuthentication) {
    throw new Error(
      '"useAuthentication" must be inside of a AuthenticationProvider',
    );
  }

  return contextAuthentication;
}

export default useAuthentication;
