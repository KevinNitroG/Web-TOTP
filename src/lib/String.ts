declare global {
  interface String {
    trimEllip(length: number): string;
  }
}

String.prototype.trimEllip = function (length: number): string {
  return this.length > length
    ? this.substring(0, length) + '...'
    : (this as string);
};

export { };
