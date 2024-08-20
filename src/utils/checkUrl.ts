import isUrl from 'is-url';

function checkUrl(url: string): boolean {
  return isUrl(url);
}

export { checkUrl };
