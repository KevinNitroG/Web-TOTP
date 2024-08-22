import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import isUrl from 'is-url';
import { ImgHTMLAttributes, memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

function Avatar({
  src,
  className,
  alt = 'avatar',
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const mergedClassName = twMerge('avatar', className);
  let Avatar: ReactNode;

  if (typeof src === 'string' && isUrl(src)) {
    Avatar = <img src={src} alt={alt} className={mergedClassName} {...props} />;
  } else {
    Avatar = <AccountCircleIcon className={mergedClassName} />;
  }

  return <>{Avatar}</>;
}

export default memo(Avatar);
