/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = Array.from(document.querySelectorAll('section')); 
const navigation = document.getElementById('navbar__list'); 
const fragment = document.createDocumentFragment(); 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// based on the tutorial https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createNavItems(){

for (let i = 0; i < sections.length; i++) {
        const itemID = sections[i].getAttribute('id');
        const itemName = sections[i].getAttribute('data-nav');
        const newElement = document.createElement('li');

        newElement.innerHTML = `<a class="menu__link" data-id = "${itemID}"href="#${itemID}">${itemName}</a>`;

        fragment.appendChild(newElement);
    }
        navigation.appendChild(fragment);
    }


// Add class 'active' to section when near top of viewport
function setActiveSection (){

for (let i = 0; i < sections.length; i++) {
     if (isInViewport(sections[i])) {
        sections[i].classList.add('your-active-class');
      }
        else{
            sections[i].classList.remove('your-active-class');
        }   
    }}

 
function setActiveNav(){
    const navMenu = document.querySelectorAll('li');
    console.log(navMenu);
    navMenu.forEach(menuEl => {
        menuEl.addEventListener('click', function(){
            navMenu.forEach(el => el.classList.remove('your-active-class'));
            this.classList.add('your-active-class');
        })
    })
}



// Scroll to anchor ID using scrollTO event

function scrollToSection(){
    const sectionLink = 'a[href^="#"]';
    const listLinks = document.querySelectorAll(sectionLink);

        listLinks.forEach(element => {
            element.onclick = function (evt) {
                    evt.preventDefault();
                    const section = document.querySelector(this.hash);
                    section.scrollIntoView({ behavior: 'smooth'});
                }
        })
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('scroll', setActiveSection);

navigation.addEventListener('click', scrollToSection);
    


// Build menu 

createNavItems();

// Scroll to section on link click

// Set sections as active

setActiveSection();

setActiveNav()
