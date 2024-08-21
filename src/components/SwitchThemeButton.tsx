import { Theme } from '@/types/theme';
import BrightnessIcon from '@mui/icons-material/Brightness5Outlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import { useAppDispatch, useAppSelector } from '@state/hook';
import { setTheme, switchTheme } from '@state/theme/themeSlice';
import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

function SwitchThemeButton() {
  const theme: Theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  const isPreferDarkScheme = useMediaQuery('(prefers-color-scheme: dark)');

  const handleOnClick = () => dispatch(switchTheme());

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (theme !== 'system') return;
    dispatch(setTheme());
  }, [isPreferDarkScheme]);
  /* eslint-enable react-hooks/exhaustive-deps */

  let IconComponent: React.ElementType;

  switch (theme) {
    case 'light':
      IconComponent = LightModeIcon;
      break;
    case 'dark':
      IconComponent = DarkModeIcon;
      break;
    case 'system':
      IconComponent = BrightnessIcon;
      break;
  }

  return (
    <div
      tabIndex={0}
      role="button"
      className="theme-controller btn btn-circle btn-ghost"
      onClick={handleOnClick}
    >
      <IconComponent />
    </div>
  );
}

export default SwitchThemeButton;
