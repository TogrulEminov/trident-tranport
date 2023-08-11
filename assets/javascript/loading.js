// !loading
const loader = document.querySelector('#preloader');
window.addEventListener('load', () => {
 setTimeout(() => {
  loader.style.display = 'none';
 }, 2000)
})
