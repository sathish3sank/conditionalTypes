import { GetTruthyKeys } from "./truthyKeys";

interface AddressT {
  street1: string | null;
  street2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
}

interface MobileT {
  personal: string;
  work: string;
  home: string;
}

type TGUser = {
  id: number;
  name: string;
  email: string;
  address: AddressT;
  mobile: MobileT;
};

type UserSelectT = {
  id: boolean;
  name: boolean;
  email: boolean;
  address: boolean;
  mobile: boolean;
};

const UserOne: TGUser = {
  id: 1,
  email: "sathish.p@skitter.in",
  name: "Sathish",
  address: {
    city: null,
    country: null,
    state: null,
    street1: null,
    street2: null,
  },
  mobile: {
    home: "",
    personal: "",
    work: "",
  },
};

declare type UserSelectPayload<S extends UserSelectT> = {
  [k in GetTruthyKeys<S>]: k extends keyof TGUser ? TGUser[k] : never;
};

type UserType = UserSelectPayload<{
  email: false;
  name: false;
  id: false;
  address: false;
  mobile: true;
}>;
