import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../../routes';

export function DisconnectedRoute({
  component: Component,
  isAuthenticated,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: Routes.home.path,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
