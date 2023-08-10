// !loading
const loader = document.querySelector('#preloader');
const body=document.querySelector('body')
window.addEventListener('load', () => {
 setTimeout(() => {
  loader.style.display = 'none';
  boy.style.overflowY= 'none';
 }, 2000);
});