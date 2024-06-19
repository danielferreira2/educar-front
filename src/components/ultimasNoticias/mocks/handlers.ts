import { rest } from 'msw';
import { apiUrl } from '../../../services/posts';
import ultimasNoticiasMock from './ultimasNoticiasMock.json';

const getUltimosPosts = rest.get(`${apiUrl}/ultimosPosts`, (req, res, ctx) => {
  return res(ctx.delay(2000), ctx.status(200), ctx.json(ultimasNoticiasMock));
});

export const UltimosPostsHandler = {
  getUltimosPosts,
};
