function marks() {
  let num;
  num = prompt("Enter a Number:");

  if (num === null) {
    alert("You didn't Input the Number");
  } else {
    if (num >= 80 && num <= 100) {
      alert("You got A+");
    } else if (num >= 70 && num < 80) {
      alert("You Got A Grade !");
    } else if (num >= 60 && num < 70) {
      alert("You Got B Grade !");
    } else if (num >= 40 && num < 60) {
      alert("You Got C Grade !");
    } else if (num >= 34 && num < 40) {
      alert("You Got D Grade !");
    } else if (num >= 0 && num < 34) {
      alert("You Are Failed !");
    }
    else
    {
        alert("Your Number is Greater then 100");
    }
  }
}
