let getdata = "You Can access Data !";

class user {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  access() {
    alert(`You can visit ${getdata}`);
  }
}
class faculty extends user {
  constructor(name, email, id, code, dpt) {
    super(name, email, id);
    this.dpt = dpt;
    this.code = code;
  }
  access() {
    alert(`You can visit Edit Marks`);
  }
}
class admin extends user {
  constructor(name, email, id, username, pw) {
    super(name, email, id);
    this.user = username;
    this.pw = pw;
  }
  access() {
    alert(`You can modify anything`);
  }
}

let Student1 = new user("Anas", "anas@gmail.com", 372);
let fac_1 = new faculty("Fac_1", "cse@gmail.com", 9553, 203, "CSE");
let admin_new = new admin("Admin_1", "admin@cse.com", 8743, "user_1", 1234);
console.log(fac_1);
console.log(admin_new);
console.log(Student1);
