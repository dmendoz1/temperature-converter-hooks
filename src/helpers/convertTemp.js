export function convertTemp(temp, convertFn) {
  const parsedNum = parseFloat(temp);
  if(Number.isNaN(parsedNum)) {
    return ' ';
  }
  const convertedNum = convertFn(parsedNum);
  const roundedNum = Math.round(convertedNum * 1000) / 1000;
  return roundedNum;
}

export function toCelsius(temp) {
  return (temp - 32) * (5/9);
}

export function toFahrenheit(temp) {
  return (temp * (9/5)) + 32;
}
