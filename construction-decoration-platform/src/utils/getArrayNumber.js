export function getArrayNumber(length, start = 0) {
    return Array.from({ length }, (_, idx) => idx + start)
  }
  