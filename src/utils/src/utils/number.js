// src/utils/number.js
export function isPositive(n) {
  const x = Number(n);
  if (Number.isNaN(x)) return false;
  return x > 0;
}
