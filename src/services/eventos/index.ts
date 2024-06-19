import axios from 'axios';
import { apiUrl } from '../posts';
import { EventosResponse } from './types';

async function getAllEvents() {
  const url = `${apiUrl}/eventos`;
  const response = await axios.get<EventosResponse>(url);

  return response.data;
}

export const EventosService = {
  getAllEvents,
};
