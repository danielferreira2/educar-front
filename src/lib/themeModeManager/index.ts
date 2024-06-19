function getThemeMode() {
  return localStorage.getItem('educarTheme');
}

function setThemeMode(mode: string) {
  localStorage.setItem('educarTheme', mode);
}

export const ThemeModeManager = {
  getThemeMode,
  setThemeMode,
};
