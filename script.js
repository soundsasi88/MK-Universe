/*==================================
MK UNIVERSE BOOK STORE
JavaScript
==================================*/

// ==========================
// HERO SLIDESHOW
// ==========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,4000);

// ==========================
// IMAGE PREVIEW
// ==========================

const previewBox = document.getElementById("previewBox");
const previewImage = document.getElementById("previewImage");

function preview(image){

    previewBox.style.display="flex";

    previewImage.src=image;

}

function closePreview(){

    previewBox.style.display="none";

}

// Close when clicking outside image

previewBox.addEventListener("click",(e)=>{

    if(e.target===previewBox){

        closePreview();

    }

});

// ==========================
// QUANTITY +
// ==========================

function plus(button){

    let quantity = button.parentElement.querySelector("span");

    let value = parseInt(quantity.innerText);

    value++;

    quantity.innerText=value;

}

// ==========================
// QUANTITY -
// ==========================

function minus(button){

    let quantity = button.parentElement.querySelector("span");

    let value = parseInt(quantity.innerText);

    if(value>1){

        value--;

    }

    quantity.innerText=value;

}

// ==========================
// BUY BUTTON
// ==========================

const buyButtons=document.querySelectorAll(".buy-btn");

buyButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const card=button.parentElement;

        const title=card.querySelector("h3").innerText;

        const qty=card.querySelector("span").innerText;

        alert(
            "Thank you for choosing MK Universe!\n\n" +
            "Book : "+title+
            "\nQuantity : "+qty+
            "\n\nContinue using the Payment button below to complete your purchase."
        );

    });

});

// ==========================
// SMOOTH FADE-IN
// ==========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".book-card,.payment-box,.contact-buttons").forEach((item)=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="0.8s";

    observer.observe(item);

});

// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>40){

        header.style.background="rgba(15,10,35,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.background="rgba(20,12,35,.75)";
        header.style.boxShadow="none";

    }

});

// ==========================
// OPTIONAL LOADING EFFECT
// ==========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});