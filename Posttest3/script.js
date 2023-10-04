const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
    }

// js untuk toggle dark and light mode
    modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js unutuk user tetap memilih mode terakhir walau page refresh atau file reopen
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
    }else{
        localStorage.setItem("mode" , "dark-mode");
    }
    });

// js unutk toggle search box
searchToggle.addEventListener("click" , () =>{
searchToggle.classList.toggle("active");
});
  
//js unutuk toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// ----js untuk pop up iklan start------
function showPopup() {
    var popup = document.getElementById("popup-ad");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup-ad");
    popup.style.display = "none";
}

// Tampilkan pop-up setelah beberapa detik
setTimeout(showPopup, 10000);
// -----js untuk pop up iklan ends-----------

