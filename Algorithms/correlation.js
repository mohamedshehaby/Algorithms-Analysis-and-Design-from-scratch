function calculateCorrelation(x, y) {
  const n = x.length;
  let xSum = 0;
  let ySum = 0;
  let xSquareSum = 0;
  let ySquareSum = 0;
  let xySum = 0;

  let r = 0;
  for (let i = 0; i < n; i++) {
    xSum += x[i];
    ySum += y[i];
    xSquareSum += Math.pow(x[i], 2);
    ySquareSum += Math.pow(y[i], 2);
    xySum += x[i] * y[i];
  }

  console.log(xSum);

  return (
    (n * xySum - xSum * ySum) /
    Math.sqrt(
      (n * xSquareSum - Math.pow(xSum, 2)) *
        (n * ySquareSum - Math.pow(ySum, 2)),
    )
  );
}

module.exports = calculateCorrelation;
