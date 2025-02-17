function sumSeries(number, divisor) {
  const lastOccurrences = Math.floor((number - 1) / divisor);

  const lastMultiple = lastOccurrences * divisor;

  return (lastOccurrences * (divisor + lastMultiple)) / 2;
}


function multiplesOf3Or5(number) {
  const sumOf3 = sumSeries(number, 3);
  const sumOf5 = sumSeries(number, 5);
  const sumOf15 =sumSeries(number, 15);
  return sumOf3 + sumOf5 - sumOf15;
}


multiplesOf3Or5(1000);
