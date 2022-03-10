export function createHelloMessage(name: string): string {
  return `Hello, ${name}!`;
}

export function logHelloMessage(name: string): void {
  console.log(createHelloMessage(name));
}
