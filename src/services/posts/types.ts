export interface Posts {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

export interface DestaquesResponse {
  destaquesPosts: Posts[];
}

export interface UltimosPostsResponse {
  ultimosPosts: Posts[];
}
