import { AppDispatch } from '@/state/store';
import type { Theme } from '@/types/theme';
import BrightnessIcon from '@mui/icons-material/Brightness5Outlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import { useAppDispatch, useAppSelector } from '@state/hook';
import { setTheme, switchTheme } from '@state/theme/themeSlice';
import { ReactNode, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

function SwitchThemeButton() {
  const theme: Theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch: AppDispatch = useAppDispatch();

  const handleOnClick = (): void => {
    dispatch(switchTheme());
  };

  const isPreferDarkScheme: boolean = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect((): void => {
    if (theme !== 'system') return;
    dispatch(setTheme());
  }, [isPreferDarkScheme]);
  /* eslint-enable react-hooks/exhaustive-deps */

  let IconComponent: ReactNode;

  switch (theme) {
    case 'light':
      IconComponent = <LightModeIcon />;
      break;
    case 'dark':
      IconComponent = <DarkModeIcon />;
      break;
    case 'system':
      IconComponent = <BrightnessIcon />;
      break;
  }

  return (
    <div
      tabIndex={0}
      role="button"
      className="theme-controller btn btn-circle btn-ghost"
      onClick={handleOnClick}
    >
      {IconComponent}
    </div>
  );
}

export default SwitchThemeButton;
