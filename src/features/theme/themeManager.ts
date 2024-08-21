import { Scheme, Theme } from '@/types/theme';
import { DARK_CLASS, LIGHT_CLASS } from '@config/theme';

function setTheme(scheme: Scheme) {
  if (scheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.remove(LIGHT_CLASS);
    document.body.classList.add(DARK_CLASS);
    document.documentElement.setAttribute('data-theme', DARK_CLASS);
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove(DARK_CLASS);
    document.body.classList.add(LIGHT_CLASS);
    document.documentElement.setAttribute('data-theme', LIGHT_CLASS);
  }
}

function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme | 'system') || 'system';
}

function getIsPrefersDarkScheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getScheme(theme: Theme): Scheme {
  const isPreffersDarkScheme: boolean = getIsPrefersDarkScheme();
  if (theme === 'system') {
    return isPreffersDarkScheme ? 'dark' : 'light';
  } else {
    return theme;
  }
}

function setAndGetTheme(): [Theme, Scheme] {
  const theme: Theme = getTheme();
  const scheme: Scheme = getScheme(theme);
  setTheme(scheme);
  return [theme, scheme];
}

function switchTheme(current: Theme): [Theme, Scheme] {
  switch (current) {
    case 'light':
      localStorage.setItem('theme', 'dark');
      break;
    case 'dark':
      localStorage.setItem('theme', 'system');
      break;
    case 'system':
      localStorage.setItem('theme', 'light');
      break;
    default:
      throw new Error('Ohh wtf how can it be?');
  }
  return setAndGetTheme();
}

export { setAndGetTheme, switchTheme };
