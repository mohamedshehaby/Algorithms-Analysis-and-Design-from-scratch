function calculateStandardDeviation(x) {
  let n = x.length;
  let a = 0;
  let b = 0;
  let sd = 0;
  let avg = 0;

  for (let i = 0; i < n; i++) {
    avg += x[i];
  }

  avg /= n;

  for (let i = 0; i < n; i++) {
    a += Math.pow(x[i] - avg, 2);
  }

  b = a / n;

  sd = Math.sqrt(b);

  return sd;
}

module.exports = calculateStandardDeviation;
