import { rest } from 'msw';
import { apiUrl } from '../../../services/posts';
import mockAllEVents from './mockAllEvents.json';

const getAllEvents = rest.get(`${apiUrl}/eventos`, (req, res, ctx) => {
  return res(ctx.delay(2000), ctx.status(200), ctx.json(mockAllEVents));
});

export const EventsHandler = {
  getAllEvents,
};
