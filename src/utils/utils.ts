
export function format(first: string, middle: string, last: string, message: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '') +
    (message ? ` ${message}` : '')
  );
}
