import { userStateSignIn } from '@/state/user/type';
import type { UserProfile } from '@/types/user';
import type { Vault, VaultItem } from '@/types/vault';
import { EncryptLocalStorage } from '@/utils/localStorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type userState = {
  isSignIn: boolean;
  vault: Vault | null;
  encryptStorage: EncryptLocalStorage | null;
  profile: UserProfile | null;
};

const initialState: userState = {
  isSignIn: false,
  vault: null,
  encryptStorage: null,
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<userStateSignIn>) => {
      state.isSignIn = true;
      state.profile = action.payload.profile;
      state.vault = action.payload.vault;
      state.encryptStorage = action.payload.encryptStorage;
    },
    signOut: (state) => {
      state.isSignIn = false;
      state.profile = null;
      state.vault = null;
    },
    editProfile: (state, action: PayloadAction<Pick<userState, 'profile'>>) => {
      state.profile = action.payload.profile;
    },
    addVaultItem: (state, action: PayloadAction<VaultItem>) => {
      state.vault?.push(action.payload);
    },
    removeVaultItem: (state, action: PayloadAction<VaultItem>) => {
      state.vault = state.vault
        ? state.vault.filter(
            (vaultItem: VaultItem) => vaultItem.id !== action.payload.id,
          )
        : null;
    },
  },
});

export const { signIn, signOut, editProfile } = userSlice.actions;
export default userSlice.reducer;
