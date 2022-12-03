import { Poll } from "./poll";
import { Token } from "./token";

export type Vote = {
  id: string;

  option: string;

  poll: Poll;

  token: Token;
};
