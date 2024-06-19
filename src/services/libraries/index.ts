import axios from 'axios';
import { Environment } from '../../environment';
import { LibraryResponse } from './schemas/libraryResponse';

async function getAll() {
  const url = `${Environment.API_URL}/libraries`;
  const response = await axios.get<LibraryResponse>(url);

  return response.data;
}

export const LibraryService = {
  getAll,
};
