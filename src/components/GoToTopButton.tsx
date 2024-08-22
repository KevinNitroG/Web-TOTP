import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { HTMLAttributes, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

function GoToTopButton({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
    return () => window.removeEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <button
      className={twMerge(
        'btn btn-circle btn-outline',
        showGoTop ? 'visible' : 'invisible',
        className,
      )}
      onClick={handleScrollUp}
      {...props}
    >
      <ArrowUpwardIcon />
    </button>
  );
}

export default GoToTopButton;
