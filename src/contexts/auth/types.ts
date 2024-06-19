export interface AuthenticationParams {
  email: string;
  password: string;
}

export interface AuthContextModel {
  isAuthenticated: boolean;
  authenticate: (params: AuthenticationParams) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}
