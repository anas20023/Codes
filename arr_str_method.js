let company;
company = ["Bloomberg" , "Microsoft" , "Uber" , "Google", "IBM","Netflix"];

company.shift(); // Shift remove the first elements from an array

company.splice(2,1,"Ula"); // Splice will add 2th  Index's Uber and delete it and add Ola

company.push("Amazon"); // It will Push Amazon at the End of the Array

console.log(company);