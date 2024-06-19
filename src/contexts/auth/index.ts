import * as React from 'react';
import { AuthContextModel } from './types';

export const AuthContext = React.createContext<AuthContextModel>({
  isAuthenticated: false,
  authenticate: async () => {},
  logout: async () => {},
  loading: false,
});
