type Modsa = Record<string, boolean>;

export function ClassNames(cls: string, modify?: Modsa, more: string[] = []): string {
  return [
    cls,
    ...more.filter(Boolean),
    ...Object.entries(modify || {})
      .filter(arr => arr[1])
      .map(arr => arr[0])
  ].join(' ');
}
