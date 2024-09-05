//Scroll Section
let sections=querySelectorAll('section');
let navLinks=querySelectorAll('header  nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop -100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            //active number links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            }
        
        
    });
    //stickyheader
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
    };
}