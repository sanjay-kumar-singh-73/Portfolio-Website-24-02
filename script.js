const form  = document.getElementById('form');
const openForm = document.getElementById('openform')
const closeForm = document.getElementById('closeform')
const homePage = document.getElementById('home');

openForm.addEventListener('click',()=>{
    form.style.display='block'
    homePage.style.display='none';
})

closeForm.addEventListener('click', ()=>{
    form.style.display='none'
    homePage.style.display='block';
    homePage.style.display='flex';
})


var newtyped = new Typed('.loop',{
    strings :["Frontend Developer", "You Tube","Backend Developer"],
    typeSpeed:150,
    backSpeed:150,
    looped:true
})