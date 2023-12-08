let add_btn = document.createElement("button");

add_btn.style.backgroundColor = "red";
add_btn.style.color = "white";
add_btn.innerText = "Click Me";
add_btn.style.padding = "12px";
add_btn.style.margin = "0 auto";

function Append_ToStart() {
  let top = document.querySelector("body");
  top.before(add_btn);
}
function Delete() {
  add_btn.remove();
}

// Ques Task_2

let para = document.querySelector("p").getAttribute("class");

function Add_st()
{
    para.classList.add("newpara");
}
console.log(para);