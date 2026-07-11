/* ==========================================
   MGST Noakhali Branch
   script.js v1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("MGST Website Loaded Successfully");

    // Loader
    const loader = document.querySelector(".loader");

    if(loader){
        setTimeout(()=>{
            loader.style.display="none";
        },1000);
    }

});


// =============================
// Back To Top Button
// =============================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});


if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

}



// =============================
// Scroll Animation
// =============================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

});

cards.forEach(card=>{

observer.observe(card);

});



// =============================
// Counter Animation
// =============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});



// =============================
// Contact Form
// =============================

const contactForm=document.querySelector("#contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে।");

contactForm.reset();

});

}



// =============================
// Report Form
// =============================

const reportForm=document.querySelector("#reportForm");

if(reportForm){

reportForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("রিপোর্ট সফলভাবে জমা হয়েছে।");

reportForm.reset();

});

}



// =============================
// Join Form
// =============================

const joinForm=document.querySelector("#joinForm");

if(joinForm){

joinForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Join Request সফলভাবে পাঠানো হয়েছে।");

joinForm.reset();

});

}



// =============================
// Current Year
// =============================

const year=document.querySelector("#year");

if(year){

year.innerHTML=new Date().getFullYear();

}