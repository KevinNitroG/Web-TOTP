import type { UserProfile } from '@/types/user';

function checkValidUsername(
  username: UserProfile['username'],
): never | boolean {
  if (username.startsWith(' ') || username.endsWith('')) {
    throw new Error('Username cannot start or end with white space');
  }
  if (username.trim() === '') {
    throw new Error('Username cannot be blank');
  }
  return true;
}

function checkValidPassword(
  password: UserProfile['password'],
): never | boolean {
  if (password.startsWith(' ') || password.endsWith(' ')) {
    throw new Error('Password cannot start or end with white space');
  }
  if (password.trim() === '') {
    throw new Error('Password cannot be blank');
  }
  return true;
}

function checkValidProfile({
  username,
  password,
}: Pick<UserProfile, 'username' | 'password'>): never | boolean {
  return checkValidUsername(username) && checkValidPassword(password);
}

export { checkValidPassword, checkValidProfile, checkValidUsername };
