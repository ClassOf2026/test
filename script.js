const students = [

{
name:"Ms.Alona Sichaleune (Nana)",
title:"Class of 2026",
quote:"",
image:"images/students/Nana.jpg",
},

{
name:"Ms.Innilanh Sihavouvong (Anny)",
title:"Class of 2026",
quote:"",
image:"images/students/Anny.jpg"
},

{
name:"Mr.Adisone Keolangsi (Boy)",
title:"Class of 2026",
quote:"",
image:"images/students/Aaron.jpg"
},

{
name:"Mr.Thanaponh Sivorlavong (Ikkyu)",
title:"Class of 2026",
quote:"",
image:"images/students/Ikkyu.jpg",
fix:"down"
},

{
name:"Ms.Ananvan Songseng (Namwarn)",
title:"Class of 2026",
quote:"",
image:"images/students/Ananvan.jpg"
},

{
name:"Mr.Phimmasone Chanthavongsa (Meenoy)",
title:"Class of 2026",
quote:"",
image:"images/students/Meenoy.jpg",
fix:"down"
},

{
name:"Ms.Southamaly Phandouangsy (Anna)",
title:"Class of 2026",
quote:"",
image:"images/students/Anna.jpg"
},

{
name:"Mr.Phothihuk Jareonpong (Jojo)",
title:"Class of 2026",
quote:"",
image:"images/students/Jojo.jpg",
fix:"down"
},

{
name:"Mr.Phisitphong Chindalath (New)",
title:"Class of 2026",
quote:"",
image:"images/students/New.jpg"
},

{
name:"Mr.Palisard Vorathamniem (Richard)",
title:"Class of 2026",
quote:"",
image:"images/students/Richard.jpg"
},

{
name:"Ms.Panyaphone Fongsavanh (Pakham)",
title:"Class of 2026",
quote:"",
image:"images/students/Pakham.jpg"
},

{
name:"Mr.Kedsadaphone Lattanapaseth (Winner)",
title:"Class of 2026",
quote:"",
image:"images/students/Winner.jpg",
fix:"down"
},

{
name:"Ms.Dalouny Kindavong (Namwan)",
title:"Class of 2026",
quote:"",
image:"images/students/Dalouny.jpg",
fix:"down"
},

{
name:"Mr.Nanthasack Vongchanthy (Sack)",
title:"Class of 2026",
quote:"",
image:"images/students/Sack.jpg"
},

{
name:"Ms.Thippachan Inthavong (Namthip)",
title:"Class of 2026",
quote:"",
image:"images/students/Thip.jpg"
},

{
name:"Mr.Sitthixay Virakao (Euro)",
title:"Class of 2026",
quote:"",
image:"images/students/Euro.jpg"
},

{
name:"Ms.Sabela Sengsone (Sabera)",
title:"Class of 2026",
quote:"",
image:"images/students/Sabera.jpg"
},

{
name:"Mr.Souklatsamy Chanpasith (Gino)",
title:"Class of 2026",
quote:"",
image:"images/students/Gino.jpg",
fix:"down"
},

{
name:"Mr.Phouvalin Inpaseuth (D-max)",
title:"Class of 2026",
quote:"",
image:"images/students/Dmax.jpg"
},

{
name:"Ms.Latdamany Thammatheva (Happy)",
title:"Class of 2026",
quote:"",
image:"images/students/Happy.jpg"
},

{
name:"Ms.Vilayphone Onxaivieng (Vicky)",
title:"Class of 2026",
quote:"",
image:"images/students/Vicky.jpg"
},

{
name:"Ms.Phachansiri Sivilay (Farsai)",
title:"Class of 2026",
quote:"",
image:"images/students/Far.jpg",
fix:"down"
},

{
name:"Mr.Thiraphone Douangsithone (Owen)",
title:"Class of 2026",
quote:"",
image:"images/students/Owen.jpg",
fix:"down"
},

{
name:"Mr.Santana Chommanivong (Tana)",
title:"Class of 2026",
quote:"",
image:"images/students/Tana.jpg",
fix:"down"
},

{
name:"Ms.Xee Chang (Minli)",
title:"Class of 2026",
quote:"",
image:"images/students/Minly.jpg"
},

{
name:"Mr.Sonthipath Sayalath (Frank)",
title:"Class of 2026",
quote:"",
image:"images/students/Frank.jpg"
},

];

// 👉 add up to student26 the same way

let current = 0;

const card = document.getElementById("studentCard");
const counter = document.getElementById("counter");

let direction = "next";

function render() {
    const s = students[current];

    card.classList.add("slide-left");

    setTimeout(() => {

        card.innerHTML = `
            <img src="${s.image}">
            <div class="student-info">
                <h3>${s.name}</h3>
                <p>${s.title}</p>
                ${s.quote ? `<blockquote>"${s.quote}"</blockquote>` : ""}
            </div>
        `;

        counter.innerText = `${current + 1}/${students.length}`;

        card.classList.remove("slide-left");
        card.classList.remove("slide-right");

    }, 180);
}

render();

document.getElementById("nextBtn").onclick = () => {
    direction = "next";
    current = (current + 1) % students.length;
    render();
};

document.getElementById("prevBtn").onclick = () => {
    direction = "prev";
    current = (current - 1 + students.length) % students.length;
    render();
};

card.classList.add("fade-in");

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});

card.addEventListener("click", () => {
    const modal = document.getElementById("studentModal");

    if (!modal) return;

    const s = students[current];

    modal.style.display = "flex";
    document.getElementById("modalImg").src = s.image;
    document.getElementById("modalName").innerText = s.name;
    document.getElementById("modalTitle").innerText = s.title;
    document.getElementById("modalQuote").innerText = s.quote; 
});

const modal = document.getElementById("studentModal");

modal.addEventListener("click", (e) => {
    // if user clicks the background (NOT the card)
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const mems = document.querySelectorAll(".mem");

mems.forEach(img => {

    // slight random rotation (very subtle = realistic)
    const rotate = (Math.random() * 10) - 5; // -5° to +5°

    // slight size variation (feels like different phones/cameras)
    const size = 160 + Math.random() * 60; // 160–220px

    img.style.width = size + "px";
    img.style.height = size + "px";

    img.style.transform = `rotate(${rotate}deg)`;
});

// WELCOME SCREEN + MUSIC

const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

    bgMusic.play();

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 800);

});