import EditIcon from '@mui/icons-material/Edit';
import CopyIcon from '@mui/icons-material/ContentCopyOutlined';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import TotpGenerator from '@/features/totp/generator';
import { VaultItem } from '@/utils/vaultType';

type Props = VaultItem;

function TotpCard({ name, secret, issuer, simpleIcons }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card card-bordered relative w-[30rem] bg-base-100 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-[auto_1fr]">
        <figure className="m-7 aspect-square items-center justify-center rounded-xl">
          {simpleIcons ? (
            <img alt={name} src={`https://cdn.simpleicons.org/${issuer}`} />
          ) : (
            <img alt={name} src={issuer} />
          )}
        </figure>
        <div className="mb-4 mr-4 mt-4 grid min-w-0 grid-cols-[1fr_auto] grid-rows-2">
          <h3 className="my-auto overflow-hidden truncate font-bold">{name}</h3>
          <div
            tabIndex={0}
            role="button"
            className={twJoin(
              'btn btn-circle btn-ghost',
              isHovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <EditIcon />
          </div>
          <p className="my-auto overflow-hidden truncate font-mono text-2xl">
            {secret ? TotpGenerator(secret) : '000 000'}
          </p>
          <div
            tabIndex={0}
            role="button"
            className={twJoin(
              'btn btn-circle btn-ghost',
              isHovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <CopyIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotpCard;
