let para = document.querySelector("#see");
let btn = document.querySelector("#btn");
let url = "https://dog-api.kinduff.com/api/facts";
let Get_Facts = async () => {
  let response = await fetch(url);
  console.log(response.json());
};

btn.addEventListener("click", Get_Facts);
