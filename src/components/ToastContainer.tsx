import { RootState } from '@/state/store';
import type { Scheme } from '@/types/theme';
import { useAppSelector } from '@state/hook';
import { ToastContainer as TC, ToastContainerProps } from 'react-toastify';

function ToastContainer(props: ToastContainerProps) {
  const scheme: Scheme = useAppSelector(
    (state: RootState): Scheme => state.theme.currentScheme,
  );

  return <TC stacked closeButton pauseOnHover theme={scheme} {...props} />;
}

export default ToastContainer;
