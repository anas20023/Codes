// let obj = {
//   Name: "Anas",
//   Salary: 15000,
//   tax: () => {
//     console.log(obj.Salary);
//   },
// };
// obj.tax();

// Prototype Pass in Object

// let MyName = {
//   fname: "Anas Ibn Belal",
//   roll: 372,
//   class: "CSE",
//   Print_itms(){
//     alert('Hello World !!');
//   }
// };

// let PrintInfo = {
//   Print_itms() {
//     console.log(this.fname);
//     console.log(this.roll);
//     console.log(this.class);
//   },
// };

// MyName.__proto__=PrintInfo;

//Class Defination

// class CSE {
//   constructor(name, roll, marks) {
//     this.name = name;
//     this.roll = roll;
//     this.marks = marks;
//   }
//   CPGA(cgpa) {
//     if (cgpa > 3.5) {
//       console.log(`Your CGPA is = ${cgpa}`);
//     } else {
//       console.log("Your CGPA is too Low");
//     }
//   }
// }

// let Anas= new CSE("Anas",372,95);
// console.log(Anas);
// console.log(Anas.CPGA(3.95));
// let Sifat=new CSE("Miel Mahmud Sifat",368,99);
// console.log(Sifat);

// Inheritation

class Class_1 {
  Fn_1(myname) {
    console.log(`My Name is = ${myname}`);
  }
}

class Child_Class extends Class_1 {
  Fn_2(alerttt) {
    alert(alerttt);
  }
}

let obj = new Child_Class;
console.log(obj);