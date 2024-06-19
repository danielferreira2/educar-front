import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { MobileMenu } from './mobileMenu';
import { DesktopMenu } from './desktopMenu';
import { UserMenu } from './userMenu';

export const pages = ['Products', 'Pricing', 'Blog'];

interface HeaderProps {
  themeMode: 'light' | 'dark';
}

export function Header(props: HeaderProps) {
  return (
    <AppBar
      position="static"
      className={'flex justify-center bg-educar-primary dark:bg-black h-24'}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* -----------------Mobile-------------------- */}
          <MobileMenu />
          {/* -------------Desktop----------------- */}
          <DesktopMenu />
          {/* ---------------User menu--------------- */}
          <UserMenu themeMode={props.themeMode} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
