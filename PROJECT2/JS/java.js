
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

