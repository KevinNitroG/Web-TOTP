import Avatar from '@/components/Avatar';
import { UserProfile } from '@/types/user';
import PlusIcon from '@mui/icons-material/ControlPointOutlined';
import { MouseEventHandler } from 'react';
import { twJoin } from 'tailwind-merge';

type ProfileProps = {
  profile?: UserProfile;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLElement>;
};

function ProfileSelection({ profile, isSelected, onClick }: ProfileProps) {
  return (
    <div
      className={twJoin(
        'card card-bordered aspect-square shadow-lg',
        isSelected ? 'bg-base-200' : 'bg-base-100',
      )}
      onClick={onClick}
    >
      {profile ? (
        <>
          <figure className="p-5">
            <Avatar
              src={profile.avatar}
              alt={profile.username}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center p-4 text-center">
            <p>{profile.username}</p>
          </div>
        </>
      ) : (
        <>
          <figure className="flex items-center justify-center p-5">
            <PlusIcon className="avatar h-full w-full" />
          </figure>
        </>
      )}
    </div>
  );
}

export default ProfileSelection;
