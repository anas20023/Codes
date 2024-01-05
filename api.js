let para = document.querySelector("#see");
let btn = document.querySelector("#btn");
let url = "https://dog-api.kinduff.com/api/facts";
let Get_Facts = async () => {
  let response = await fetch(url);
  let obj = await response.json();
  if (response.status != 200) {
    para.innerText = "Check Your Internet Connection !";
  } else {
    para.innerText = obj.facts;
  }
};

btn.addEventListener("click", Get_Facts);
