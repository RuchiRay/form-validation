console.log("form validation");
let nam = document.getElementById("nam");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
console.log(nam);
console.log(email);
console.log(phone);
let validNam = false;
let validEmail = false;
let validPhone = false;
$("#failure").hide();
$("#success").hide();

// validation messages what i did
// let valid = document.createElement('h6')
// valid.className = 'valid'
// valid.innerText = 'enter valid username'
// console.log(valid);
// let valdiv = document.getElementById('validation')
// console.log(valdiv);
// console.log(valdiv.childNodes);

nam.addEventListener("blur", () => {
  console.log("the name is blurred");
  let reg = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = nam.value;
  if (reg.test(str)) {
    console.log("it matched");
    nam.classList.add("is-valid");
    nam.classList.remove("is-invalid");
    validNam = true;
  } else {
    console.log("didnt match");
    nam.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    validNam = false;
  }
});
email.addEventListener("blur", () => {
  console.log("the email is blurred");
  let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(reg);
  console.log(str);
  if (reg.test(str)) {
    console.log("it matched");
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("didnt match");
    email.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    validEmail = false;
  }
});
phone.addEventListener("blur", () => {
  console.log("the phone is blurred");
  let reg = /^([0-9]){10}$/;
  let str = phone.value;
  if (reg.test(str)) {
    console.log("it matched");
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("didnt match");
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    validPhone = false;
  }
});
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("you clicked on submit");
  // submit your form
  if (validEmail && validNam && validPhone) {
    console.log("phone , email , username are valid , submitting the form");
    $("#failure").hide();
    $("#success").show();
  } else{
      console.log("one of the phone , email , username is in-valid");
      $('#success').hide();
      $('#failure').show();

  } 
});
