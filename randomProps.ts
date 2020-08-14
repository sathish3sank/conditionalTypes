import { Subset } from "./mappedTypes";

type Select = {
  id?: number;
  name?: string;
  email?: string;
  mobile?: {
    personal?: string;
    work?: string;
  };
};

type RandomProps = {
  first?: string;
  second?: Select;
};

declare function RandaomWrap<T extends RandomProps>(
  x: Subset<T, RandomProps>
): T extends RandomProps ? T : never;

//RandaomWrap({ first: "Sathish", second: { email: "sathish.p@skitter.in" } });
