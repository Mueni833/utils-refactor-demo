// src/utils.js
// Intentionally messy: duplicates, unused, and inconsistent naming.

export function toUpper(text) {
  if (text == null) return "";
  return String(text).toUpperCase();
}

export function to_lower(text) {
  if (text == null) return "";
  return String(text).toLowerCase();
}

// Duplicate-ish (both trim spacing): we'll collapse these later
export function trimSpaces(str) {
  if (str == null) return "";
  return String(str).trim();
}

export function trim(str) {
  if (str == null) return "";
  return String(str).trim();
}

// Slightly inconsistent naming; we’ll normalize to camelCase
export function is_blank(str) {
  return !str || String(str).trim().length === 0;
}

// A rarely used helper we’ll remove
export function _noop() {}

// A basic number helper (we’ll move this to a number module)
export function isPositive(n) {
  const x = Number(n);
  if (Number.isNaN(x)) return false;
  return x > 0;
}
