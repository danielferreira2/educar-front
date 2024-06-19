import * as React from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '.';
import { UserTokenManager } from '../../lib/userTokenManager';
import { AuthService } from '../../services/auth';
import { AuthenticationParams } from './types';

export interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    const user = UserTokenManager.getItem();
    if (user) {
      return true;
    }
    return false;
  });
  const [loading, setLoading] = React.useState(false);

  const authenticate = React.useCallback(
    async (params: AuthenticationParams) => {
      try {
        setLoading(true);
        const response = await AuthService.login(params);
        UserTokenManager.setItem(response);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setIsAuthenticated(false);
        toast.error(error.response?.data?.message);
      }
    },
    []
  );

  const logout = React.useCallback(async () => {
    UserTokenManager.remove();
    setIsAuthenticated(false);
    location.reload();
  }, []);

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authenticate, logout, loading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
