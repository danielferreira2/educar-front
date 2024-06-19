import axios from 'axios';
import { DestaquesResponse, UltimosPostsResponse } from './types';

export const apiUrl = 'https://uenf.br/educar';

async function getDestaques() {
  const url = `${apiUrl}/destaques`;
  const response = await axios.get<DestaquesResponse>(url);

  return response.data;
}

async function getUltimosPosts() {
  const url = `${apiUrl}/ultimosPosts`;
  const response = await axios.get<UltimosPostsResponse>(url);

  return response.data;
}

export const PostsService = {
  getDestaques,
  getUltimosPosts,
};
