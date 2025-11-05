// src/utils/string.js
export function toUpper(text) {
  if (text == null) return "";
  return String(text).toUpperCase();
}

export function toLower(text) {
  if (text == null) return "";
  return String(text).toLowerCase();
}

export function trim(str) {
  if (str == null) return "";
  return String(str).trim();
}

export function isBlank(str) {
  return !str || String(str).trim().length === 0;
}
