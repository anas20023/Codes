var fname, lwrc, nspc;

function Gettext() {
  fname = document.getElementById("inp").value;
}

function convert_Name() {
  Gettext(); // Ensure fname is set by calling Gettext function
  lwrc = fname.toLowerCase();
  nspc = lwrc.replaceAll(" ", "");
  if (nspc.length == 0) {
    alert("Don't leave the field empty!!");
    document.getElementById("user_gen_T").innerHTML = "";
  } else {
    document.getElementById("user_gen_T").innerHTML =
      "@" +
      nspc +
      Math.floor(Math.random() * 100 + 1) +
      nspc.length +
      Math.floor(Math.random() * 100 + 1);
  }
}
