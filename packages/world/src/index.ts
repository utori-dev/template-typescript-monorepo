import { createHelloMessage, logHelloMessage } from '@utori-dev/template-typescript-monorepo-hello';

export const GREETING: string = createHelloMessage('World');

export function logGreeting(): void {
  logHelloMessage('World');
}
