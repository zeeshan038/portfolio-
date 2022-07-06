const fasolid= document.getElementsByClassName('fa-solid');
const navbarlinks = document.getElementsByClassName('nav-links');

fasolid.addEventListener('click',()=>{
    navbarlinks.classList.toggle('active');
})