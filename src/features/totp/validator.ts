import { totp } from 'otplib';

function TotpValidator(
  secret: string,
  token: string,
  digits: number = 6,
): boolean {
  totp.options = { digits: digits };
  return totp.verify({ secret, token });
}

export { TotpValidator };
