import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  src?: string | File | null;
  className?: string;
  alt?: string;
};

function Avatar({ src = null, className, alt = 'avatar' }: Props) {
  const mergedClass = twMerge('avatar', className);
  let Avatar: React.ReactElement;

  if (src instanceof File) {
    const fileURL = URL.createObjectURL(src);
    Avatar = <img src={fileURL} alt={alt} />;
  } else if (typeof src === 'string') {
    Avatar = <img src={src} alt={alt} />;
  } else {
    Avatar = <AccountCircleIcon />;
  }

  return <div className={mergedClass}>{Avatar}</div>;
}

export default memo(Avatar);
