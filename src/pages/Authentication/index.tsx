import ToastContainer from '@/components/ToastContainer';
import Profile from '@/pages/Authentication/components/Profile';
import SignIn from '@/pages/Authentication/Signin';
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
    <div className="card card-bordered grid max-h-[60vh] grid-cols-[auto_auto_auto] bg-base-100 p-8 shadow-2xl">
      <div className="w-full">
        {profiles.map((profile) => (
          <Profile profile={profile} />
        ))}
        {<Profile />}
      </div>
      <div className="divider divider-horizontal"></div>
      {signInMode ? <SignIn /> : <SignUp />}
      <ToastContainer />
    </div>
  );
}

export default Authentication;
