import { UserResponse } from '../../services/auth/schemas/userResponse';

function getItem(): UserResponse | null {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }

  return null;
}

function setItem(item: UserResponse) {
  return localStorage.setItem('user', JSON.stringify(item));
}

function remove() {
  return localStorage.removeItem('user');
}

export const UserTokenManager = {
  getItem,
  setItem,
  remove,
};
