import ProfileSelection from '@/pages/Authentication/components/ProfileSelection';
import SignIn from '@/pages/Authentication/SignIn';
import SignUp from '@/pages/Authentication/SignUp';
import { UserProfile } from '@/types/user';
import { getEncryptedUserProfilesFromStorage } from '@/utils/localStorage';
import { useMemo, useState } from 'react';

function Authentication() {
  const profiles: UserProfile[] = useMemo(
    getEncryptedUserProfilesFromStorage,
    [],
  );
  const [selectedProfile, setSelectedProfile] = useState<
    UserProfile | undefined
  >(profiles?.[0]);

  return (
    <div className="card card-bordered grid max-h-fit min-h-80 grid-cols-[auto_auto_auto] bg-base-100 p-8 shadow-2xl">
      <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-2">
        {profiles.map((profile: UserProfile) => (
          <ProfileSelection
            profile={profile}
            isSelected={profile.username === selectedProfile?.username}
            onClick={(): void => setSelectedProfile(profile)}
          />
        ))}
        {
          <ProfileSelection
            onClick={(): void => setSelectedProfile(undefined)}
            isSelected={!selectedProfile}
          />
        }
      </div>
      <div className="divider divider-horizontal"></div>
      {selectedProfile ? (
        <SignIn encryptedProfile={selectedProfile} />
      ) : (
        <SignUp />
      )}
    </div>
  );
}

export default Authentication;
