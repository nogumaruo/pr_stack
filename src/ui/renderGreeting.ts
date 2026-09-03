import { getGreeting } from "../api/greet";

export function renderGreeting(name: string): string {
  const { message } = getGreeting({ name });

  return `<main><h1>${message}</h1></main>`;
}
