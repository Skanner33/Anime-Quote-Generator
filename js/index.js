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

   
});



  