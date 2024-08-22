import type { User } from '@/types/user';
import type { Vault, VaultItem } from '@/types/vault';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { EncryptStorage } from 'encrypt-storage';

export type userState = {
  isSignIn: boolean;
  vault: Vault | null;
  encryptStorage: EncryptStorage | null;
} & User;

const initialState: userState = {
  avatar: null,
  isSignIn: false,
  password: null,
  username: null,
  vault: null,
  encryptStorage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<userState>) => {
      state.isSignIn = true;
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.vault = action.payload.vault;
    },
    signOut: (state) => {
      state.isSignIn = false;
      state.avatar = null;
      state.username = null;
      state.password = null;
    },
    editProfile: (
      state,
      action: PayloadAction<
        Pick<userState, 'username' | 'password' | 'avatar'>
      >,
    ) => {
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.password = action.payload.password;
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
