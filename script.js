const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".blue-background button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

function removeDummy() {
  var elem = document.getElementById('banner2');
  elem.parentNode.removeChild(elem);
 }

 function onSubmitFunc() {
  var name = document.forms["RegForm"]["Name"];
  var email = document.forms["RegForm"]["Email"];
  var phone = document.forms["RegForm"]["Telephone"];
  var password = document.forms["RegForm"]["Password"];

  if (name.value === "") {
    name.style.border = "1px solid red";
    alert("Name must be filled out");
    name.focus();
    return false;
  }
  else if(name.value !== "") {
    name.style.border = "1px solid green";
  }

  if (email.value === "" || email.value.indexOf("@", 0) < 0) {
    email.style.border = "1px solid red";
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  else if(email.value !== "") {
    email.style.border = "1px solid green";
  }

  if (phone.value === "" || isNaN(phone.value) || phone.value.length != 10) {
    phone.style.border = "1px solid red";
    alert("Please enter a valid phone number.");
    phone.focus();
    return false;
  }
  else if(phone.value !== "") {
    phone.style.border = "1px solid green";
  }

  var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if(!regularExpression.test(password.value)) {
    password.style.border = "1px solid red";
    alert("password should contain atleast one number and one special character");
    return false;
}
else if(password.value !== "") {
  password.style.border = "1px solid green";
}

  if (password.value === "" || password.value.length < 6 ) { 
    password.style.border = "1px solid red";
    alert("Password must be at least 6 characters long.");
    password.focus();
    return false;
  }
else if(password.value !== "") {
    password.style.border = "1px solid green";
  }

  return true;
}