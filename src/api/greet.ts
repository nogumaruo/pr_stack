import { createGreeting } from "../domain/greeting";

export type GreetRequest = {
  name: string;
};

export function getGreeting({ name }: GreetRequest) {
  return createGreeting(name);
}
