document.querySelector('.menu').addEventListener('click',()=>document.querySelector('nav').classList.toggle('show'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('show')));
