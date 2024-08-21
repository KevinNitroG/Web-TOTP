export type Theme = 'system' | 'dark' | 'light';
export type Scheme = Exclude<Theme, 'system'>;
