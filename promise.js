// let My_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     alert("Sorry !!");
//     reject("Done !!");
//   }, 2000);
// });

// console.log(My_promise);
// setTimeout(() => {
//   console.log(My_promise);
// }, 2000);

function Print_Number(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("gett").innerHTML += `Data of ${n} <br>`;
      resolve("ok");
    }, 3000);
  });
}

(async function () {
  let n = parseInt(prompt("Enter Number"));
  for (let i = 1; i <= n; i++) {
    document.getElementById("getting").innerText = `Fetching Data ${i}.......`;
    await Print_Number(i);
  }
  document.getElementById("getting").innerText = "Successfully Completed !!";
})();
