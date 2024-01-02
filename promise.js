let My_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    alert("Sorry !!");
    reject("Done !!");
  }, 2000);
});

console.log(My_promise);
setTimeout(() => {
  console.log(My_promise);
}, 2000);
