import { Container, Grid } from '@mui/material';
import * as React from 'react';
import { areasDePesquisa } from './areasDePesquisa';

export function AreaDePesquisa() {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <Container maxWidth={'xl'}>
      <h2 className={'text-5xl font-bold text-educar-primary text-center my-8'}>
        Área de pesquisa
      </h2>
      <Grid
        container
        spacing={2}
        className={'bg-educar-primary bg-opacity-40 p-8 mt-4 rounded-3xl'}
      >
        {areasDePesquisa.map((area, idx) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            key={idx}
            className={
              'relative flex justify-center mb-8 hover:font-bold cursor-pointer'
            }
          >
            <img
              src={area.image}
              className={'opacity-40 hover:opacity-100 max-w-sm'}
            />
            <h3
              className={
                'text-4xl text-white text-center transform -translate-y-1/2 absolute top-1/2 left-1/2 -translate-x-1/2'
              }
            >
              {area.name}
            </h3>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
