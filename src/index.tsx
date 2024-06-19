import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/dist.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EducarThemeProvider } from './contexts/educarTheme/educarThemeProvider';
import { AuthContextProvider } from './contexts/auth/authContextProviver';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EducarThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <App />
        </LocalizationProvider>
      </EducarThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
