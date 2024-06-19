import * as React from 'react';
import { AuthContext } from '../../contexts/auth';
import { LoginSearchFields } from './loginSearchFields';

export function Login() {
  const { authenticate, loading } = React.useContext(AuthContext);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <React.Fragment>
      <LoginSearchFields onLogin={authenticate} loading={loading} />
    </React.Fragment>
  );
}
