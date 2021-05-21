const navBar = document.querySelector(".hamburger-menu")
const container = document.querySelector(".container")

navBar.addEventListener("click", () => {
    container.classList.toggle("active")
})
