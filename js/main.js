const yearEl = document.getElementById("year");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");

const phoneLink = document.getElementById("phoneLink");

const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");

const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");

function handleHeaderOnScroll(){
    if(!siteHeader) return;

    if(window.scrollY > 10){
        siteHeader.classList.add("is-scrolled");
    }else{
        siteHeader.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", handleHeaderOnScroll);
handleHeaderOnScroll();

const navLinks = [
    {label: "Home", href: "#hero"},
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href: "#footer"}
];

const mobileLinks = [
    {label: "Home", href: "#hero"},
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href: "#footer"}
];

function renderNavigation(){
    if(nav){
      const navHTML = navLinks.map((link) => {
        return `<a href="${link.href}" class="nav-link">${link.label}</a>`;
      }).join("");
      nav.innerHTML = navHTML;
    }
}

function renderMobile(){
    if(mobileMenu){
        const mobileHTML = mobileLinks.map((link) => {
            return `<a href="${link.href}" class="mobile-link">${link.label}</a>`;
        }).join("");
        mobileMenu.innerHTML = mobileHTML;
    }
}

renderNavigation();

renderMobile();

const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your style.", 
        img: "assets/images/feature-1.jpg"
    },
    {
        title: "Beard Trim",
        text: "Shape and line-up your beard for a clean, sharp finish.",
        img: "assets/images/feature-2.jpg"
    },
    {
        title: "Straight Razor Shave",
        text: "Hot towel treatment with a smooth traditional shave.",
        img: "assets/images/feature-3.jpg"
    }
];

function renderFeatures(){
    if(!featureGrid) return;

    featureGrid.innerHTML = "";

    services.forEach(function(service){

        const card = document.createElement("article");

        card.classList.add("feature-card")

        card.innerHTML = `
        <img src="${service.img}" alt="${service.title}" class="feature-img">
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        `

        featureGrid.appendChild(card)

    })
}

renderFeatures();

function setCurrentYear() {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
}

function updateHeadingText(newText) {
    heading.textContent = newText;
}

let isMenuOpen = false;

function toggleMobileMenu(){
    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
}

function closeMobileMenu(){
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
}

setCurrentYear();

ctaBtn.addEventListener("click", function() {
    updateHeadingText(
        "Booking coming next - great choice!"
    );
});

callBtn.addEventListener("click", function(){
    if(phoneLink) {
        updateHeadingText(
            "Call us at " + phoneLink.textContent
        );
    } else {
        updateHeadingText(
            "Call feature coming next!"
        );
    }
});

menuBtn.addEventListener("click", function() {
    toggleMobileMenu();
});

mobileMenu.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        closeMobileMenu();
    }
});

// for in loop
let myObj = {
    name: "Martin",
    age: 33,
    email: "email@email.com"
};

for (let whatever in myObj){
    console.log(myObj[whatever]);
};

// for of loop
let myArray = [1,2,3,4,5,6,7]
for(let number of myArray){
    console.log(number);
};

// nested loop
let newArray = [[1,2,3,4,5,6,7,8,9], [4,5,6,7,8,9], [7,8,9]];

for(let i = 0; i < newArray.length; i++){
    for(let j = 0; j < newArray[i].length; j++){
        console.log(newArray[i][j])
    }
};

