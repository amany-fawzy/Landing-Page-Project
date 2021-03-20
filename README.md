# Landing Page Project

## Table of Contents

* Author Name
* Project Brief
* Languages
* Features
* Quick Summary

### Author Name

Amany Fawzy Mohamed.

### Project Brief

This project contains on a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

### Languages

1. html5

1. css3

1. javascript


### Features

1. There are 5 sections that have been added to the page.

1. Navigation is built dynamically as an unordered list.

1. When clicking an item from the navigation menu, the link should scroll to the appropriate section.

1. All features are usable across modern desktop, tablet, and phone browsers.

1. Styling has been added for active states.

### Quick Summary

*  In index.html file, I added one section.

* I added js/app.js in index html file.

* I added styles to a such as:  text-decoration, padding, margin, text-align.

* I added styles added to  active-link class 

* I added responsive class that makes the nav items look good on small screens ,through icon beside the items in the navigation menu, and I used @media , function ,and also create element li that inside it element a  such as:

```javascript
const liUl= document.createElement('li');
const anchor= document.createElement('a');
anchor.href='javascript:void(0);';
anchor.className='icon';
anchor.setAttribute('onclick','myfunction()');
liUl.appendChild(anchor);
fragment.appendChild(liUl);
list.appendChild(fragment);

function myfunction(){
    const list= document.getElementById('navbar__list');
    if(list.className==='menu__link') {
        list.className+='responsive';
    }else{
        list.className='menu__link';
    }
}
myfunction();
```

* In app.js file , I created a navigation menu based on the sections of the page  that consist of five items , when the user Clicks on a navigation item  scroll to the appropriate section of the page , I used loop (for... of ) and also used methods such as: 
  * Document.querySelectorAll();
  * Document.querySelector();
  * Document.createDocumentFragment();
  * Document.createElement();
  * appendChild();
  * getAttribute();

* I added event to a to scroll to section such as:
```javascript
a.addEventListener('click',scrollTosection);
function scrollTosection(event){
event.preventDefault();
a.href='#'+ id;
section.scrollIntoView({behavior:'smooth',block:'center'})
  }
  ```

* I added event on window to get active class , and active link and I used getBoundingClientRect() method , document.querySelectorAll() method , loop (for ... of ) , and if statement , such as:
```javascript
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
```

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
