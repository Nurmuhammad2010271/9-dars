let ism = prompt("Ismingizni kiriting");
let newName = document.createElement("h1");
newName.textContent = "Nurmuhammad";

let surname = prompt("Familiyangizni kiriting");
let newSurname = document.createElement("h1");
newSurname.textContent = "Ubaydullaev";

let age = +prompt("Yoshingizni kiriting");
let newAge = document.createElement("p");
newAge.textContent = 14;
document.body.append(newName,newSurname,newAge);

// if(son == ""){
//     alert("Iltimis 1 ni yoki 2 kini talang")
// }
// else if(son == 1){
//     newName.toUpperCase(ism);
// }
// else if(son == 2){
//     newName.toLowerCase(ism);
// }
// else if(son == 1){
//     newSurname.toUpperCase(surname);
// }
// else if(son == 2){
//     newSurname.toLowerCase(surname);
// }