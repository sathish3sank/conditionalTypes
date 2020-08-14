export type GetTruthyKeys<T extends object> = {
  [k in keyof T]: T[k] extends false ? never : k;
}[keyof T];

export type GetFalsyKeys<T extends object> = {
  [k in keyof T]: T[k] extends true ? never : k;
}[keyof T];

type Y = GetTruthyKeys<{ a: true; b: false; c: true }>;
type Z = GetFalsyKeys<{ a: true; b: false; c: true }>;
