// !loading
const loader = document.querySelector('#preloader');
const body=document.querySelector('body')
window.addEventListener('load', () => {
 setTimeout(() => {
  loader.style.display = 'none';
  body.style.overflow= 'hidden';
 }, 2000);
});