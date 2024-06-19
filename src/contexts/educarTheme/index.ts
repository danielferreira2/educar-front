import * as React from 'react';
import { EducarTheme } from './types';

export const EducarThemeContext = React.createContext<EducarTheme>({
  theme: 'light',
  updateTheme: () => {},
});
