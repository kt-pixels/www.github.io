
//   function menuOnClick(){
//     document.getElementById('menu-bar').classList.toggle('change');
//     let hidden = document.getElementById('myNavbar').classList.toggle('newmynav');
//     if(hidden.style.display === "block"){
//         hidden.style.display = "none";
//     }
//     else{
//         hidden.style.display = "block";
//     }
// }
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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('contextmenu', event => event.preventDefault());

// let myrecent = document.getElementById("recent");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction1()};

// function scrollFunction1() {
//   if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
//     myrecent.style.position = "scroll";
//   } else {
//     myrecent.style.position = "fixed";
//   }
// }