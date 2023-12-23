// let obj = {
//   Name: "Anas",
//   Salary: 15000,
//   tax: () => {
//     console.log(obj.Salary);
//   },
// };
// obj.tax();

// Prototype Pass in Object

let MyName = {
  fname: "Anas Ibn Belal",
  roll: 372,
  class: "CSE",
  Print_itms(){
    alert('Hello World !!');
  }
};

let PrintInfo = {
  Print_itms() {
    console.log(this.fname);
    console.log(this.roll);
    console.log(this.class);
  },
};

MyName.__proto__=PrintInfo;
