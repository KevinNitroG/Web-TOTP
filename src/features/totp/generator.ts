import { totp } from 'otplib';

function TotpGenerator(secret: string, digits: number = 6): string {
  totp.options = { digits: digits };
  return totp.generate(secret);
}

export default TotpGenerator;
