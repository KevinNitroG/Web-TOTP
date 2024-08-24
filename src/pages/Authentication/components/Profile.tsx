import Avatar from '@/components/Avatar';
import { UserProfile } from '@/types/user';
import { ImgHTMLAttributes, MouseEventHandler } from 'react';

type ProfileProps = {
  profile?: UserProfile;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLElement>;
};

function Profile({ profile, isSelected, onClick }: ProfileProps) {
  return <>{profile ? <></> : <></>}</>;
}

export default Profile;
