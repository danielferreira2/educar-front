import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { PrivateRoute } from './components/privateRoute';
import { EducarThemeContext } from './contexts/educarTheme';
import { AreaDoProfessor } from './pages/areaDoProfessor';
import { Login } from './pages/login';
import { Routes } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './contexts/auth';
import { UserTokenManager } from './lib/userTokenManager';
import {
  authHeadersInterceptor,
  unauthorizedInterceptor,
} from './lib/axios/interceptors';
import { DisconnectedRoute } from './components/disconnectedRoute';

const Home = React.lazy(() => import('./pages/home'));

function App() {
  const { theme } = React.useContext(EducarThemeContext);
  const { isAuthenticated } = React.useContext(AuthContext);

  const user = UserTokenManager.getItem();

  React.useEffect(() => {
    authHeadersInterceptor(user?.token || '');
    unauthorizedInterceptor();
  }, [user]);

  return (
    <Router>
      <React.Suspense
        fallback={
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        }
      >
        <Switch>
          <React.Fragment>
            <section
              className={
                (theme === 'dark' ? 'dark' : '') +
                ' flex flex-col h-screen justify-between'
              }
            >
              <Header themeMode={theme === 'dark' ? 'dark' : 'light'} />
              <Route exact path={Routes.home.path} component={Home} />

              <PrivateRoute
                exact
                path={Routes.areaDoProfessor.path}
                component={AreaDoProfessor}
                isAuthenticated={isAuthenticated}
              />

              <DisconnectedRoute
                exact
                path={Routes.login.path}
                component={Login}
                isAuthenticated={isAuthenticated}
              />

              <Footer />
            </section>
            <ToastContainer />
          </React.Fragment>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
