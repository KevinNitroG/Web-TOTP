import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
  name: string;
  secret: string;
  issuer: string;
  simpleIcons: boolean;
};

function TOTPCard({ name, secret, issuer, simpleIcons }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const IssueImg: React.ReactElement = simpleIcons ? (
    <img
      className="m-4 min-w-full"
      alt={name}
      src={`https://cdn.simpleicons.org/${issuer}`}
    />
  ) : (
    <img alt={name} src={issuer} />
  );

  return (
    <div
      className="card relative w-[35rem] bg-base-100 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-[4em_auto]">
        <figure>
          <div className="flex aspect-square items-center justify-center rounded-xl bg-ctp-text">
            {IssueImg}
          </div>
        </figure>
        <div className="flex flex-col">
          <h3 className="mr-10 overflow-hidden truncate font-bold">{name}</h3>
          <p>2350 2312 4123 1413</p>
          <div className="m-4 inline-flex justify-end">
            <button className={twJoin('btn', !isHovered && 'invisible')}>
              Copy
            </button>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost absolute right-4 top-4 cursor-pointer border-none"
      >
        <EditIcon />
      </div>
    </div>
  );
}

export default TOTPCard;
