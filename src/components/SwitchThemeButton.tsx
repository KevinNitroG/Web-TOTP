import { Theme } from '@/config/themes';
import { useAppDispatch, useAppSelector } from '@/state/hook';
import { setTheme, switchTheme } from '@/state/theme/themeSlice';
import { BoltIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

function SwitchThemeButton() {
  const theme: Theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  const isPreferDarkScheme = useMediaQuery('(prefers-color-scheme: dark)');

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (theme !== 'system') return;
    dispatch(setTheme());
  }, [isPreferDarkScheme]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const iconProps = {
    className:
      'text-ctp-surface0 bg-ctp-text dark:text-ctp-text dark:bg-ctp-surface0 w-16 h-16 rounded-full p-2',
    onClick: () => dispatch(switchTheme()),
  };

  const renderIcon = (IconComponent: React.ElementType, props: object) => {
    return <IconComponent {...props} />;
  };

  let Icon: JSX.Element;

  switch (theme) {
    case 'light':
      Icon = renderIcon(SunIcon, iconProps);
      break;
    case 'dark':
      Icon = renderIcon(MoonIcon, iconProps);
      break;
    case 'system':
      Icon = renderIcon(BoltIcon, iconProps);
      break;
  }

  return <>{Icon}</>;
}

export default SwitchThemeButton;
