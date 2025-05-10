/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/* ==== ACHIEVEMENTS SECTION ====*/

document.getElementById('viewAllBtn_1').addEventListener('click', function() {
    const moreImages_1 = document.getElementById('moreImages_1');
    const dialog_1 = document.getElementById('dialog_1');
    
    // Show the dialog box
    dialog_1.style.display = 'flex';
});

document.getElementById('closeDialog_1').addEventListener('click', function() {
    const dialog_1 = document.getElementById('dialog_1');
    dialog_1.style.display = 'none';
});

// Close dialog when clicking outside of the dialog content
window.addEventListener('click', function(event) {
    const dialog_1 = document.getElementById('dialog_1');
    if (event.target === dialog_1) {
        dialog_1.style.display = 'none';
    }
});

// Function to open image in a floating window
function openImageInPopup(imageSrc) {
    const popupWindow = window.open("", "ImagePopup_1", "width=600,height=400");
    popupWindow.document.write(`
        <html>
            <head>
                <title>Image</title>
                <style>
                    body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    img { max-width: 100%; max-height: 100%; }
                </style>
            </head>
            <body>
                <img src="${imageSrc}" alt="Achievement Image">
            </body>
        </html>
    `);
}

/* ==== CERTIFICATIONS SECTION ====*/

document.getElementById('viewAllBtn_2').addEventListener('click', function() {
    const moreImages_2 = document.getElementById('moreImages_2');
    const dialog_2 = document.getElementById('dialog_2');
    
    // Show the dialog box
    dialog_2.style.display = 'flex';
});

document.getElementById('closeDialog_2').addEventListener('click', function() {
    const dialog_2 = document.getElementById('dialog_2');
    dialog_2.style.display = 'none';
});

// Close dialog when clicking outside of the dialog content
window.addEventListener('click', function(event) {
    const dialog_2 = document.getElementById('dialog_2');
    if (event.target === dialog_2) {
        dialog_2.style.display = 'none';
    }
});

// Function to open image in a floating window
function openImageInPopup(imageSrc) {
    const popupWindow = window.open("", "ImagePopup_2", "width=600,height=400");
    popupWindow.document.write(`
        <html>
            <head>
                <title>Image</title>
                <style>
                    body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    img { max-width: 100%; max-height: 100%; }
                </style>
            </head>
            <body>
                <img src="${imageSrc}" alt="Certificate Image">
            </body>
        </html>
    `);
}