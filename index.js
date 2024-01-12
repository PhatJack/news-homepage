let header = document.getElementById("header")
let burger = document.getElementById("burger")
let mobileMenu = document.getElementById("mobileMenu")
let closeMenu = document.getElementById("closeActive")
burger.addEventListener("click", () => {
	mobileMenu.classList.toggle("translate-x-full")
})
closeMenu.addEventListener("click", () => {
	mobileMenu.classList.toggle("translate-x-full")
})