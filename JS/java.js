
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("myNavbar").classList.toggle("newmynav");
  };


let amShowing = document.getElementById('meShow');
let showHide = document.getElementById("rMore1"); 

function showMore() { 
  if(amShowing.onmouseout){
  showHide.style.display = "block"; 
  }
  else{
    showHide.style.display = "none"; 
    }
} 


// JavaScript code
function search_posts() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('myposts');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Get the button:
let mybutton = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('contextmenu', event => event.preventDefault());


// DROPDOWNS FOR MENU BARS LISTS 

const show1 = document.getElementById('show1');
const show2 = document.getElementById('show2');
const show3 = document.getElementById('show3');
const show4 = document.getElementById('show4');


const dropdown1 = document.getElementById('Dropdown1');
const dropdown2 = document.getElementById('Dropdown2');
const dropdown3 = document.getElementById('Dropdown3');
const dropdown4 = document.getElementById('Dropdown4');

const whenClickFirst = document.getElementById('whenClickFirst');
const whenClickSecond = document.getElementById('whenClickSecond');
const whenClickThird = document.getElementById('whenClickThird');
const whenClickForth = document.getElementById('whenClickForth');


function dropdownMenu() {

  // FIRST 
  const toggleDropdown1 = () =>{
    if (dropdown1.style.display === 'none' || dropdown1.style.display === '') {
      dropdown1.style.display = 'block';
      dropdown2.style.display = 'none'
      dropdown3.style.display = 'none'
      dropdown4.style.display = 'none'
    }else {
      dropdown1.style.display = 'none';
    }
}

  show1.addEventListener('click', event => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    toggleDropdown1();
    if (whenClickFirst.classList.contains('fas', 'fa-angle-down')) {
      // FIRST 
      whenClickFirst.classList.toggle('fa-angle-down');
      whenClickFirst.classList.toggle('fa-angle-double-up');
      // SECOND 
      whenClickSecond.classList.add('fa-angle-down')
      whenClickSecond.classList.remove('fa-angle-double-up')
      // THIRD 
      whenClickThird.classList.remove('fa-angle-double-up')
      whenClickThird.classList.add('fa-angle-down')
      // FORTH 
      whenClickForth.classList.remove('fa-angle-double-up')
      whenClickForth.classList.add('fa-angle-down')
    }
});

  document.addEventListener('click', event => {
    const contain = event.target;
    if (!dropdown1.contains(contain)) {
      dropdown1.style.display = 'none'
    }
    if (!whenClickFirst.contains(contain)) {
      whenClickFirst.classList.add('fa-angle-down')
      whenClickFirst.classList.remove('fa-angle-double-up')
    }
  })

  // SECOND 
  const toggleDropdown2 = () => {
    if (dropdown2.style.display === 'none' || dropdown2.style.display === '') {
      dropdown2.style.display = 'block';
      dropdown1.style.display = 'none'
      dropdown3.style.display = 'none'
      dropdown4.style.display = 'none'
    }else {
      dropdown2.style.display = 'none';
    }
}

show2.addEventListener('click', event => {
  event.stopPropagation()
  toggleDropdown2();

  if (whenClickSecond.classList.contains('fas', 'fa-angle-down')) {
    // FIRST 
    whenClickSecond.classList.toggle('fa-angle-down');
    whenClickSecond.classList.toggle('fa-angle-double-up');
    // SECOND 
    whenClickFirst.classList.add('fa-angle-down')
    whenClickFirst.classList.remove('fa-angle-double-up')
    // THIRD 
    whenClickThird.classList.remove('fa-angle-double-up')
    whenClickThird.classList.add('fa-angle-down')
    // FORTH 
    whenClickForth.classList.remove('fa-angle-double-up')
    whenClickForth.classList.add('fa-angle-down')
  }
})

document.addEventListener('click', event =>{
  const contain = event.target;
  if (!dropdown2.contains(contain)) {
    dropdown2.style.display = 'none'
  }
  if (!whenClickSecond.contains(contain)) {
    whenClickSecond.classList.add('fa-angle-down')
    whenClickSecond.classList.remove('fa-angle-double-up')
  }
})

  // THIRD 
  const toggleDropdown3 = () => {
    if (dropdown3.style.display === 'none' || dropdown3.style.display === '') {
      dropdown3.style.display = 'block';
      dropdown2.style.display = 'none'
      dropdown1.style.display = 'none'
      dropdown4.style.display = 'none'
    }else {
      dropdown3.style.display = 'none';
    }
  }
  show3.addEventListener('click', event => {
    event.stopPropagation();
    toggleDropdown3();

    if (whenClickThird.classList.contains('fas', 'fa-angle-down')) {
      // FIRST 
      whenClickThird.classList.toggle('fa-angle-down');
      whenClickThird.classList.toggle('fa-angle-double-up');
      // SECOND 
      whenClickSecond.classList.add('fa-angle-down')
      whenClickSecond.classList.remove('fa-angle-double-up')
      // THIRD 
      whenClickFirst.classList.remove('fa-angle-double-up')
      whenClickFirst.classList.add('fa-angle-down')
      // FORTH 
      whenClickForth.classList.remove('fa-angle-double-up')
      whenClickForth.classList.add('fa-angle-down')
    }
  })

  document.addEventListener('click', event => {
    const contain = event.target;
    if(!dropdown3.contains(contain)){
      dropdown3.style.display = 'none'
    }
    if (!whenClickThird.contains(contain)) {
      whenClickThird.classList.add('fa-angle-down')
      whenClickThird.classList.remove('fa-angle-double-up')
    }
  })

  // FOURTH 
  const toggleDropdown4 = () => { 
    if (dropdown4.style.display === 'none' || dropdown4.style.display === '') {
      dropdown4.style.display = 'block';
      dropdown2.style.display = 'none'
      dropdown3.style.display = 'none'
      dropdown1.style.display = 'none'
    }else {
      dropdown4.style.display = 'none';
    }
  }

  show4.addEventListener('click', event => {
    event.stopPropagation();
    toggleDropdown4();

    if (whenClickForth.classList.contains('fas', 'fa-angle-down')) {
      // FIRST 
      whenClickForth.classList.toggle('fa-angle-down');
      whenClickForth.classList.toggle('fa-angle-double-up');
      // SECOND 
      whenClickSecond.classList.add('fa-angle-down')
      whenClickSecond.classList.remove('fa-angle-double-up')
      // THIRD 
      whenClickThird.classList.remove('fa-angle-double-up')
      whenClickThird.classList.add('fa-angle-down')
      // FORTH 
      whenClickFirst.classList.remove('fa-angle-double-up')
      whenClickFirst.classList.add('fa-angle-down')
    }
  })

  document.addEventListener('click', event => {
    const contain = event.target;
    if (!dropdown4.contains(contain)) {
      dropdown4.style.display = 'none'
    }
    if (!whenClickForth.contains(contain)) {
      whenClickForth.classList.add('fa-angle-down')
      whenClickForth.classList.remove('fa-angle-double-up')
    }
  })
}

dropdownMenu();