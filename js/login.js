
document.getElementById('login-btn').addEventListener('click', function() {
    const emailPerson = 'ahmedrafi364@gmail.com';
    const passwordPerson = '1234';

    const inputEmail = get_login_element('email-field');
    const inputPassword = get_login_element('password-field');

   if((emailPerson === inputEmail) && (inputPassword === passwordPerson)) {
    
    window.location.href = "index.html"; 

   }
   else {
    console.log("Wrong Password");
   }

    
})

// document.getElementById('logout-bt').addEventListener('click', function() {
//     window.location.href = "login.html";
// })