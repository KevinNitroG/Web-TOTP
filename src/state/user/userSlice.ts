import type { UserProfile } from '@/types/user';
import type { Vault, VaultItem } from '@/types/vault';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { EncryptStorage } from 'encrypt-storage';

export type userState = {
  isSignIn: boolean;
  vault: Vault | null;
  encryptStorage: EncryptStorage | null;
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
    signIn: (state, action: PayloadAction<userState>) => {
      state.isSignIn = true;
      state.profile = action.payload.profile;
      state.vault = action.payload.vault;
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
