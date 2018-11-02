/**
 * If a number is only one digit long, pad it on the left with a 0.
 * Otherwise return the number as is.
 * @param {number | string} num - Input integer
 * @returns {string}
 */
export function pad(num: number | string): string {

  const numStr: string = String(num);

  if (numStr.length < 2) {
    return `0${numStr}`;
  } else {
    return numStr;
  }
}
