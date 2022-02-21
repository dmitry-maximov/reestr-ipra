import { $host } from './index';

import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
  const { data } = await $host.post('api/auth/registration', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const loginUser = async (email, password) => {
  const { data } = await $host.post('api/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
