export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const c2asc: number[] = [...collection_2];
  let lo = 0;
  let hi = c2asc.length - 1;
  while (lo < hi) {
    const tmp = c2asc[lo];
    c2asc[lo] = c2asc[hi];
    c2asc[hi] = tmp;
    lo++;
    hi--;
  }

  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < collection_1.length || j < c2asc.length || k < collection_3.length) {
    const a = i < collection_1.length ? collection_1[i] : Infinity;
    const b = j < c2asc.length ? c2asc[j] : Infinity;
    const c = k < collection_3.length ? collection_3[k] : Infinity;

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= a && b <= c) {
      result.push(b);
      j++;
    } else {
      result.push(c);
      k++;
    }
  }

  return result;
}
