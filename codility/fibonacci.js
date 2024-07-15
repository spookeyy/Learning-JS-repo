var yourself = {
  fibonacci: function (n) {
    if (n < 2) {
      return n;
    }
    return yourself.fibonacci(n - 1) + yourself.fibonacci(n - 2);
  },
};

console.log(yourself.fibonacci(10));
