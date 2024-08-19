import { EMPTY_AVATAR } from '@/config/avatar';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  src?: string;
  className?: string;
  alt?: string;
};

function Avatar({ src = EMPTY_AVATAR, className, alt = '' }: Props) {
  const mergedClass = twMerge('rounded-full', 'avatar', className);

  return (
    <div className={mergedClass}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default memo(Avatar);
