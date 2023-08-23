const toggleButton = document.querySelector(".toggle-button");
const navList = document.querySelector("ul");

toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
});
