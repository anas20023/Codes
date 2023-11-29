var fname, lwrc, nspc;

function Gettext() {
  fname = document.getElementById("inp").value;
}

function convert_Name() {
  lwrc = fname.toLowerCase();
  nspc = lwrc.replaceAll(" ", "");
  if (nspc.length == 0) {
    alert("Dont Leave the Field Empty !!");
    document.getElementById("user_gen_T").innerHTML ="";
  } else {
    document.getElementById("user_gen_T").innerHTML =
      "@" +
      nspc +
      Math.floor(Math.random() * 100 + 1) +
      nspc.length +
      Math.floor(Math.random() * 100 + 1);
  }
}
