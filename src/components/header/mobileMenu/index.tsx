import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { EnumRoutes } from '../../../routes/enumRoutes';
import { Routes } from '../../../routes';

export function MobileMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {Object.keys(Routes).map(
            (key, index) =>
              Routes[key as EnumRoutes].name !== Routes.login.name && (
                <Link to={Routes[key as EnumRoutes].path} key={index}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography> {Routes[key as EnumRoutes].name}</Typography>
                  </MenuItem>
                </Link>
              )
          )}
        </Menu>
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        LOGO
      </Typography>
    </React.Fragment>
  );
}
