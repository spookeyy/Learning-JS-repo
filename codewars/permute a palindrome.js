function permuteAPalindrome(input) {
  let count = 0;
  const sum = input.split``.reduce(
    (a, b) => ((a[b] = a[b] ? a[b] + 1 : 1), a),
    {}
  );
  for (let i in sum) {
    if (sum[i] % 2 !== 0) {
      count++;
    }
    if (count === 2) return false;
  }
  return true;
}