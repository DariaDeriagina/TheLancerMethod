document.addEventListener("DOMContentLoaded", () => {
	const burger = document.getElementById("burgerMenu");
	const menuContainer = document.getElementById("menuContainer");

	burger.addEventListener("click", () => {
		menuContainer.classList.toggle("active");
	});
});
