// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

export type Subset<T, U> = {
  [k in keyof T]: k extends keyof U ? k : never;
}[keyof T];

type dam = {
  id?: string;
  dam: string;
};

type damSubSet<T> = Subset<T, dam>;

type SampleDam = damSubSet<{ id: "Sathish"; dam?: "Test"; sat: "" }>;
