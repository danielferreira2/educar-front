import { Container, Grid, Skeleton } from '@mui/material';
import * as React from 'react';
import { useDestaques } from './useDestaques';

export function Destaques() {
  const { destaques, loading } = useDestaques();
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <Container maxWidth={'xl'}>
      <h2 className={'text-5xl font-bold text-educar-primary text-center my-8'}>
        Destaques
      </h2>
      <Grid
        container
        spacing={2}
        className={
          'bg-educar-primary bg-opacity-40 pb-4 pr-4 pt-0 mt-4 rounded-3xl'
        }
      >
        {loading ? (
          <>
            <Grid item md={7}>
              <div className={'relative'}>
                <Skeleton
                  variant={'rectangular'}
                  className={'w-card h-cardDestaque'}
                />
                <div className={'p-4 absolute bottom-0 w-full'}>
                  <Skeleton
                    animation={'wave'}
                    variant={'rectangular'}
                    height={40}
                  />
                  <Skeleton animation={'wave'} variant={'text'} />
                  <Skeleton animation={'wave'} variant={'text'} />
                  <Skeleton animation={'wave'} variant={'text'} />
                  <Skeleton animation={'wave'} variant={'text'} />
                </div>
              </div>
            </Grid>
            <Grid item md={5} className={'flex flex-col justify-between'}>
              {Array.from(new Array(2)).map((item, index) => (
                <div key={index} className={'relative my-2 lg:my-0'}>
                  <Skeleton
                    variant={'rectangular'}
                    className={'max-w-full h-cardSubDestaque'}
                  />
                  <div className={' p-4 absolute bottom-0 w-full'}>
                    <Skeleton
                      variant={'rectangular'}
                      animation={'wave'}
                      height={'20'}
                    />
                    <Skeleton variant={'text'} animation={'wave'} />
                    <Skeleton variant={'text'} animation={'wave'} />
                  </div>
                </div>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={7}>
              <div className={'relative'}>
                <img
                  className={'w-card h-cardDestaque'}
                  src={destaques?.destaquesPosts[0].image}
                  alt={destaques?.destaquesPosts[0].title}
                />
                <div className={'bg-educar-bg-cards p-4 absolute bottom-0'}>
                  <h2 className={'text-educar-primary-dark text-6xl font-bold'}>
                    {destaques?.destaquesPosts[0].title}
                  </h2>
                  <p
                    className={
                      'text-educar-primary-dark text-2xl font-bold mt-4'
                    }
                  >
                    {destaques?.destaquesPosts[0].description.slice(0, 200)}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={5} className={'flex flex-col justify-between'}>
              {destaques?.destaquesPosts.slice(1, 3).map((post, idx) => (
                <div key={idx} className={'relative my-2 lg:my-0'}>
                  <img
                    className={'w-card h-cardSubDestaque'}
                    src={post.image}
                    alt={post.title}
                  />
                  <div
                    className={
                      'bg-educar-bg-cards p-4 absolute bottom-0 w-full'
                    }
                  >
                    <h2
                      className={'text-educar-primary-dark text-2xl font-bold'}
                    >
                      {post.title}
                    </h2>
                    <p
                      className={
                        'text-educar-primary-dark text-sm font-bold mt-4'
                      }
                    >
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

// {destaques?.destaquesPosts.map((post, idx) => (
//   <Grid container spacing={2} key={idx}>

// ))}
