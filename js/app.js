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

const sections = Array.from (document.querySelectorAll('section'));
const navigation = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createNavItems(){

   
for (let i = 0; i < sections.length; i++) {
        let itemID = sections[i].getAttribute('id');
        let itemName = sections[i].getAttribute('data-nav');
        const newElement = document.createElement('li');
        newElement.innerHTML = `<a class="menu__link" href="#${itemID}">${itemName}</a>`;
    
        fragment.appendChild(newElement);
    }


        navigation.appendChild(fragment);

    }


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

createNavItems();

// Scroll to section on link click

// Set sections as active
