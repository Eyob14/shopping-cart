export function roundToTwoDecimals(value: number): number {
  const str = value.toFixed(10);
  const parts = str.split(".");
  if (parts.length === 1) {
    return value;
  }
  const integerPart = Number.parseInt(parts[0]!, 10);
  const decimalPart = parts[1]!;

  const firstThree = decimalPart.substring(0, 3).padEnd(3, "0");
  const thirdDigit = Number.parseInt(firstThree[2]!, 10);
  const firstTwo = Number.parseInt(firstThree.substring(0, 2), 10);

  if (thirdDigit >= 5) {
    return integerPart + (firstTwo + 1) / 100;
  } else {
    return integerPart + firstTwo / 100;
  }
}
