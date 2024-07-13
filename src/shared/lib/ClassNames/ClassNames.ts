type Mods = Record<string, boolean>;

export function ClassNames(cls: string, modify: Mods = {}, more: string[] = []): string {
  return [
    cls,
    ...Object.entries(modify || {})
      .filter(arr => arr[1])
      .map(arr => arr[0]),
    ...more.filter(Boolean)
  ].join(' ');
}
