let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
 
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
/* scroll section active link*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset= sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navlinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        };
    });

        /* sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 150);
    /* remove toggle icon and navbar*/
     menuIcon.classList.remove('fa-xmark');
     menuIcon.classList.add('fa-bars');
     navbar.classList.remove('active');
};
/* sticky navbar*/
ScrollReveal({
    distance:'80px',
    duration: 2000,       
    delay: 200,
});
ScrollReveal().reveal('.home-content,.heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contect h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-contect p, .about-content',{origin:'right'});
/*typed js*/
const typed =new Typed('.multiple-text',{
    strings:['Web Designer','IT Engineer','Data Analyst'],
    typeSpeed:20,
    backSpeed:30,
    backDelay:2000,
    loop:true,
}); 
// send message
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
    await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });
     

    successMessage.style.display = 'block';
    form.reset();

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);

} catch (error) {
    console.error(error);
    alert('Message could not be sent.');
}
});
