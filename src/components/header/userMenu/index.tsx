import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { EducarThemeContext } from '../../../contexts/educarTheme';
import { AuthContext } from '../../../contexts/auth';
import { UserTokenManager } from '../../../lib/userTokenManager';
import { useHistory } from 'react-router-dom';
interface UserMenuProps {
  themeMode: 'light' | 'dark';
}

export function UserMenu(props: UserMenuProps) {
  const { updateTheme } = React.useContext(EducarThemeContext);
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  const loggedUser = UserTokenManager.getItem();

  const history = useHistory();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <React.Fragment>
      <section className={'mr-4'}>
        <Tooltip title="Open settings">
          <IconButton
            onClick={() => {
              updateTheme(props.themeMode === 'dark' ? 'light' : 'dark');
            }}
            sx={{ p: 0 }}
          >
            {props.themeMode === 'dark' ? (
              <LightModeIcon className={'text-white'} />
            ) : (
              <DarkModeIcon className={'text-educar-moon'} />
            )}
          </IconButton>
        </Tooltip>
      </section>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={loggedUser?.user?.name} src={loggedUser?.user?.name} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {isAuthenticated ? (
            <MenuItem onClick={logout}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={() => history.push('/login')}>Login</MenuItem>
          )}
        </Menu>
      </Box>
    </React.Fragment>
  );
}
