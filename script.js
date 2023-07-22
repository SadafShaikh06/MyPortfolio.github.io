let header = document.getElementById("header-sec");
let menu = document.getElementById("menu-icon");
let menuIcon = document.querySelector(".fa-bars");
const carousel = document.querySelector(".skills");
let arrowBtns = document.querySelectorAll(".row-2 i");
let firstCardWidth = carousel.querySelector(".cards").offsetWidth;
const carouselChildren = [...carousel.children];

// getting the number of cards that can fit in the carousel at once
let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);

// inserting copies of last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerview).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// inserting copies of first few cards to end of carousel for infinite scrolling
carouselChildren.slice(0, cardPerview).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// making the header responsive
menu.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    header.classList.toggle("active");
} 

window.onscroll = ()=>{
    menuIcon.classList.remove('fa-xmark');
    header.classList.remove('active');
}

// adding event listeners to the arrow buttons to scroll the carousel
arrowBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
       carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const infiniteScroll = ()=>{
    if (carousel.scrollLeft === 0){

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}

// clearing the form on clicking submit button
function clearAll (){

    document.getElementById("clearText").value = "" ;
    document.getElementById("inp2").value = "" ;
    document.getElementById("inp3").value = "" ;
    document.getElementById("inp4").value = "" ;

    alert("Message sent successfully!");
}

carousel.addEventListener("scroll", infiniteScroll);

//light dark theme
let theme = document.getElementById("theme");

theme.onclick  = ()=>{
    
}

// offsetWidth returns the viewable width of an element

