const calculateAverage = (str, ...numbers) => {
  let sum = 0;
  numbers.forEach(num => (sum += num));
  const average = sum / numbers.length;
  return `The average ${str} is ${average}`;
};
console.log(calculateAverage("grade", 0, 100, 88, 64));
