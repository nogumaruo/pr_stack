export type Greeting = {
  message: string;
};

export function createGreeting(name: string): Greeting {
  return { message: `Hi, ${name}!` };
}
