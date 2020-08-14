declare function sample<T extends "Hai" | "S">(
  x: T
): T extends "Hai" ? "Hello" : "Sorry";

sample("S");

type UserT = {
  id: number;
  name: string;
  age?: number;
};

type UsersT = {
  id: number;
  name: string;
  age: number;
}[];

declare function User<T>(
  x: T
): T extends UserT ? T : T extends UsersT ? T : never;

User({ id: 1, name: "Sathish"});
