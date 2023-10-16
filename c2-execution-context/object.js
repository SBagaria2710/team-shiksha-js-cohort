let tsMember = {
  firstName: "Shashwat",
  lastName: "Bagaria",
  age: 26,
  pastCompanies: [{}, {}, {}],
  key1: {
    key2: {
      key3: "You found me!"
    }
  }
};

let obj = tsMember;
tsMember.firstName = "Something Random";

console.log(tsMember["pastCompanies"]);