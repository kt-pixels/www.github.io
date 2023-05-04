function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("myNavbar").classList.toggle("newmynav");
  };


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



function menuOnhover() {
  let recentImg = document.getElementsByClassName('mycomming')[i];
  for (let i = 0; i < recentImg.length; i++) {
    recentImg.getElementsByClassName('hovertext')[i].innerHTML = "COMMING SOON";
  }
}
