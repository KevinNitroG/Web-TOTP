import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import isUrl from 'is-url';
import { ImgHTMLAttributes, isValidElement, memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type AvatarProps = {
  src?: string | ReactNode;
  className?: string;
  alt?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

function Avatar({ src, className, alt = 'avatar', ...props }: AvatarProps) {
  const mergedClassName: string = twMerge(
    'avatar min-h-full min-w-full',
    className,
  );
  let Avatar: ReactNode;

  if (typeof src === 'string' && isUrl(src)) {
    Avatar = <img src={src} alt={alt} className={mergedClassName} {...props} />;
  } else if (isValidElement(src)) {
    Avatar = src;
  } else {
    Avatar = <AccountCircleIcon className={mergedClassName} />;
  }

  return <>{Avatar}</>;
}

export default memo(Avatar);
