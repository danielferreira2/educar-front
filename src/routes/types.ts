import { EnumRoutes } from './enumRoutes';

export interface RouteParams {
  name: string;
  path: string;
  children?: RouteParams;
}

export type IRoutes = {
  [key in EnumRoutes]: RouteParams;
};
