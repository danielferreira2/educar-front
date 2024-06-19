import axios from 'axios';
import { AuthenticationParams } from '../../contexts/auth/types';
import { Environment } from '../../environment';
import { UserResponse } from './schemas/userResponse';

async function login(body: AuthenticationParams) {
  const url = `${Environment.API_URL}/login`;
  const response = await axios.post<UserResponse>(url, body);

  return response.data;
}

export const AuthService = {
  login,
};
