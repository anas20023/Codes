// let Factorial = (a) => {
//     let fact=1;
//   for(let i=1; i<=a ; i++)
//   {
//         fact *=i;
//   }
//   console.log(fact);

// };

// Factorial(5);
let m = 1;

let Fact = (m) => {
  if (m === 0) {
    return;
  } else {
    return m * Fact(m - 1);
  }
};
console.log(Fact(5));
