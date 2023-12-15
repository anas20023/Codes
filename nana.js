let sum_Click = document.querySelector("#sum");
let ProDuct_Click = document.querySelector("#pro");
let Sum_show = document.querySelector("#sum_Sh");
let Pro_show = document.querySelector("#pro_Sh");
let input_Val = document.querySelector("#inp");
let My_arr = [];

input_Val.addEventListener("blur", () => {
  for (let i = 1; i <= input_Val.value; i++) {
    My_arr.push(i);
  }
});

// For Sum
sum_Click.addEventListener("click", () => {
  if (input_Val.value < 0) {
    alert("Please Enter Positive Number");
  }
  let sum = My_arr.reduce((sum, value) => {
    return sum + value;
  });
  Sum_show.innerHTML = `Sum is = ${sum}`;
  input_Val.innerHTML = "";
});

// For Product
ProDuct_Click.addEventListener("click", () => {
  if (input_Val.value < 0) {
    alert("Please Enter Positive Number");
  }
  let mult = My_arr.reduce((prod, value) => {
    return prod * value;
  });
  Pro_show.innerHTML = `Product Value is = ${mult}`;
  input_Val.innerHTML = "";
});
