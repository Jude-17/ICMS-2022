const homeLink=document.querySelector(".navbar-link");
const mobileMenu = document.getElementById("menu");
const content=document.querySelector(".container");
const home = document.querySelector(".box-home");
const abstract = document.querySelector(".box-abstract");
const speakers = document.querySelector(".box-speakers");
const committee = document.querySelector(".box-org-committee");
const gallery = document.querySelector(".box-gallery");
const navbar=document.querySelector(".navbar");
const mobileNavbarLinks=document.querySelectorAll(".mobile");

mobileNavbarLinks.forEach(m=>{
    m.addEventListener("click",navToggle)
})

window.addEventListener("load",()=>{
    console.log("HERE")
    home.classList.remove("box");
    home.classList.add("visible");
})

let currentPage=home;
let currentActive=homeLink;
currentActive.classList.add("active")

navbar.addEventListener("click",(e)=>{
    let link=String(e.target.textContent)
    link=link.trim();
    console.log(link);
    if(link==='Home') {
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        home.classList.remove("box");
        home.classList.add("visible");
        currentPage=home;
        currentActive && currentActive.classList.remove("active")
        currentActive=e.target;
        e.target.classList.add("active");
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Submission of Abstract'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        abstract.classList.remove("box");
        abstract.classList.add("visible");
        currentPage=abstract;
        currentActive && currentActive.classList.remove("active")
        currentActive=e.target;
        e.target.classList.add("active");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Invited Speakers'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        speakers.classList.remove("box");
        speakers.classList.add("visible");
        currentPage=speakers;
        currentActive && currentActive.classList.remove("active")
        currentActive=e.target;
        e.target.classList.add("active");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Organizing Committee'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        committee.classList.remove("box");
        committee.classList.add("visible");
        currentPage=committee;
        currentActive && currentActive.classList.remove("active")
        currentActive=e.target;
        e.target.classList.add("active");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Gallery'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        gallery.classList.remove("box");
        gallery.classList.add("visible");
        currentPage=gallery;
        currentActive && currentActive.classList.remove("active")
        currentActive=e.target;
        e.target.classList.add("active");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
})
// For Mobile menu
mobileMenu.addEventListener("click",(e)=>{
    let link=String(e.target.textContent)
    link=link.trim();
    console.log(link);
    if(link==='Home') {
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        home.classList.remove("box");
        home.classList.add("visible");
        currentPage=home;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Submission of Abstract'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        abstract.classList.remove("box");
        abstract.classList.add("visible");
        currentPage=abstract;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Invited Speakers'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        speakers.classList.remove("box");
        speakers.classList.add("visible");
        currentPage=speakers;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Organizing Committee'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        committee.classList.remove("box");
        committee.classList.add("visible");
        currentPage=committee;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else if (link==='Gallery'){
        currentPage.classList.add("box");
        currentPage.classList.remove("visible");
        gallery.classList.remove("box");
        gallery.classList.add("visible");
        currentPage=gallery;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})
//Toggling Actions
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click',navToggle)