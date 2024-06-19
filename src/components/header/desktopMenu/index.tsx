import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../routes';
import { EnumRoutes } from '../../../routes/enumRoutes';

export function DesktopMenu() {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        className={'font-bold'}
      >
        eduCar
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
          marginRight: 2,
        }}
      >
        {
          Object.keys(Routes).map(
            (key, index) =>
              Routes[key as EnumRoutes].name !== Routes.login.name && (
                <Link to={Routes[key as EnumRoutes].path} key={index}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    {Routes[key as EnumRoutes].name}{' '}
                  </Button>{' '}
                </Link>
              )
          )
          //
        }
      </Box>
    </React.Fragment>
  );
}
