import { rest } from 'msw';
import { apiUrl } from '../../../services/posts';
import mockDestaquesPost from './mockDestaquesPost.json';

const destaquesPosts = rest.get(`${apiUrl}/destaques`, (req, res, ctx) => {
  return res(ctx.delay(2000), ctx.status(200), ctx.json(mockDestaquesPost));
});

export const DestaquesHandlers = {
  destaquesPosts,
};
