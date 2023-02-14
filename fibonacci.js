const fibonacci = function (num) {
  if (+num < 0) return 'OOPS';
  if (num === 0) return 0;

  let arr = [0, 1];

  let x = arr[0];
  let y = arr[1];

  for (let i = 1; i < +num; i++) {
    const holder = y;
    y = x + y;
    x = holder;

    arr.push(y);
  }

  return arr;
};

// console.log(fibonacci(-2));

const fibonacciRecursive = function (num) {
  return num < 2
    ? num
    : fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};

// console.log(fibonacciRecursive(3));
