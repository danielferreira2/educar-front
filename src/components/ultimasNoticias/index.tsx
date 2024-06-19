import { Container, Grid, Skeleton } from '@mui/material';
import * as React from 'react';
import { PostsService } from '../../services/posts';
import { UltimosPostsResponse } from '../../services/posts/types';

export function UltimasNoticias() {
  const [loading, setLoading] = React.useState(false);
  const [ultimosPosts, setUltimosPosts] =
    React.useState<UltimosPostsResponse>();

  const getUltimosPosts = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await PostsService.getUltimosPosts();
      setUltimosPosts(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getUltimosPosts();
  }, [getUltimosPosts]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <Container maxWidth={'xl'}>
      <h2 className={'text-5xl font-bold text-educar-primary text-center my-8'}>
        Últimas Notícias
      </h2>
      <Grid
        container
        spacing={2}
        className={
          'bg-educar-primary bg-opacity-40 pb-4 pr-4 pt-0 mt-4 rounded-3xl'
        }
      >
        {loading ? (
          Array.from(new Array(4)).map((item, index) => (
            <Grid item xs={12} md={6} key={index} className={'flex'}>
              <Skeleton
                variant={'rectangular'}
                className={
                  'max-w-cardSmall w-cardSmall h-cardSmall max-h-cardSmall'
                }
              />
              <div className={'ml-4 w-full'}>
                <Skeleton animation="wave" height={40} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
                <Skeleton variant={'text'} width={'80%'} />
              </div>
            </Grid>
          ))
        ) : (
          <>
            {ultimosPosts?.ultimosPosts.map((post, idx) => (
              <Grid item xs={12} md={6} key={idx} className={'flex'}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={
                    'max-w-cardSmall w-cardSmall h-cardSmall max-h-cardSmall object-cover'
                  }
                />
                <div className={'ml-4'}>
                  <h3 className={'text-2xl font-bold'}>{post.title}</h3>
                  <p className={'text-lg font-bold mt-2 text-gray-600'}>
                    {post.description}
                  </p>
                </div>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
}
