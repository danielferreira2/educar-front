import * as React from 'react';
import { EducarThemeContext } from '.';
import { ThemeModeManager } from '../../lib/themeModeManager';

export interface EducarThemeProviderProps {
  children: React.ReactNode;
}

export function EducarThemeProvider(props: EducarThemeProviderProps) {
  const [theme, setTheme] = React.useState(() => 'light');

  const getTheme = React.useCallback(() => {
    const themeMode = ThemeModeManager.getThemeMode();
    if (themeMode) {
      setTheme(themeMode);
    }
  }, []);

  const updateTheme = React.useCallback((themeSelected: string) => {
    ThemeModeManager.setThemeMode(themeSelected);
    setTheme(themeSelected);
  }, []);

  React.useEffect(() => {
    getTheme();
  }, [getTheme]);

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <EducarThemeContext.Provider value={{ theme, updateTheme }}>
      {props.children}
    </EducarThemeContext.Provider>
  );
}
