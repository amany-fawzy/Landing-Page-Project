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
// to access all sections
var sections=document.querySelectorAll('section');
// to access ul
const list= document.querySelector('ul');
//to create a Document Fragment 
const fragment= document.createDocumentFragment();
//to loop on sections lists
sections.forEach(function(section){
// to create li
const li=document.createElement('li');
// to create a 
const a =document.createElement('a');
// to append a to li    
li.appendChild(a);
// to access data-nav values for sections 
var data=section.getAttribute('data-nav');
// to add text to a 
a.textContent=data; 
// to access id values for sections
const id = section.getAttribute('id');  
// to add href attribute 
a.href='#'+ id;

//scroll to section
a.addEventListener('click',scrollTosection);
function scrollTosection(event){
event.preventDefault();
a.href='#'+ id;
section.scrollIntoView({behavior:'smooth',block:'center'})
  }
// to append li to fragment
fragment.appendChild(li); 
});
// to append a document fragment to ul
list.appendChild(fragment);

// to get active class ,and active link
var links= document.querySelectorAll('a');
var allSection=document.querySelectorAll('section');
window.addEventListener('scroll', function activeStates(){
for( const all of allSection){
    const getBound=all.getBoundingClientRect();
    all.classList.remove('your-active-class');
if(getBound.top>0 && getBound.top<=200){
    var dataItems=all.getAttribute('data-nav');
    all.classList.remove('your-active-class');
    all.classList.add('your-active-class'); 
    }
console.log(getBound);
   
    }
for(const link of links){
    const lin=document.querySelector('a');
    const active= lin.className='active-link';
    var sec=document.querySelector('section');
for(var sect of allSection){
    sect.getAttribute('data-nav');
    link.classList.remove('active-link');
    if(dataItems==link.textContent){
    link.classList.add('active-link');   
        }
       }
  }    
});

// to create li 
const liUl= document.createElement('li');
const anchor= document.createElement('a');
anchor.href='javascript:void(0);';
anchor.className='icon';
anchor.setAttribute('onclick','myfunction()');
liUl.appendChild(anchor);
fragment.appendChild(liUl);
list.appendChild(fragment);

// to add class to ul
function myfunction(){
    const list= document.getElementById('navbar__list');
    if(list.className==='menu__link') {
    list.className+='responsive';
    }else{
    list.className='menu__link';
    }
}
myfunction();

    
/**
 * Define Global Variables
 * 
*/


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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


