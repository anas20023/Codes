var fname,lwrc,nspc;

function Gettext() {
   fname= document.getElementById("inp").value;
}

function convert_Name() {
    lwrc = fname.toLowerCase();
    nspc = lwrc.replaceAll(" ","");

  document.getElementById("user_gen_T").innerHTML ="@" + nspc + nspc.length;
}
