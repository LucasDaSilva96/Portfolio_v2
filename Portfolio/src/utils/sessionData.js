export const setSessionTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
};

export const getSessionTheme = () => {
  return sessionStorage.getItem("theme") || null;
};
