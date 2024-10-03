const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
   event.preventDefault();
   
   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   const email = document.getElementById('email').value;
   const phoneNumber = document.getElementById('phone').value;
   const password = document.getElementById('password').value;
   
   // Validation
   if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
   }

   // Log data as object
   const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      password: password
   };
   console.log(formData);





 document.getElementById('firstName').value="";
document.getElementById('lastName').value="";
 document.getElementById('email').value="";
 document.getElementById('phone').value="";
 document.getElementById('password').value=""
   
});

function validateEmail(email) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}
