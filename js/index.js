// const api

document.addEventListener('DOMContentLoaded', () => {
   const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
     const form = document.getElementById('log-form');

     if(form.style.display === 'none') {
         form.style.display = 'block';
     }else{
         form.style.display = 'none';
     }

    });

 const loginBtn = document.getElementById("login-btn");
 const loginForm = document.getElementById("login-form");

 loginBtn.addEventListener('click', () => {
  if(loginForm.style.display === "none"){
    loginForm.style.display = "block";
  } else{
    loginForm.style.display = "none";
  }
});

});



  