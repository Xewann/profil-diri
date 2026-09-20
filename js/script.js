// let angkaGanjil = 4;
// angkaGanjil = 1;

// const angkaGenap = 2;
// console.log(angkaGanjil);
// console.log(angkaGenap);

// Search Query Skill
const skillListData = document.querySelector("#skill-list");
const skillInput = document.querySelector("#cari-skill");

if (skillListData && skillInput) {
    const skills = [
        {nama: "PHP"},
        {nama: "HTML"},
        {nama: "CSS"},
        {nama: "PostgreSQL"},
        {nama: "Linux"},
        {nama: "AbuSQL"},
    ];

    function render() {
        const keyword = skillInput.value.toLowerCase();

        const filterResult = skills.filter((skill) => {
            return skill.nama.toLowerCase().includes(keyword);
        }); 

        skillListData.innerHTML = filterResult.map((skill) => {
            return `<div class="skill-card">${skill.nama}</div>`;
        }).join('');
    }
        
    // Call render function when the input value changes
    skillInput.addEventListener('input', render);
    render();
}

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
   menu.classList.toggle("active"); 
})

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300 ) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});