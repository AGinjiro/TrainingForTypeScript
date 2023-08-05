export default function unknownSample() {
  const maybeNumber: unknown = 10;

  console.log('unknown Sample 2:', typeof maybeNumber, maybeNumber);

  const isFoo = maybeNumber == 'foo';

  console.log('unknown Sample 2:', typeof isFoo, isFoo);
}
