import { totp } from 'otplib';

function getTimeRemaining(): number {
  return totp.timeRemaining();
}

function getTimeUsed(): number {
  return totp.timeUsed();
}

export { getTimeRemaining, getTimeUsed };
