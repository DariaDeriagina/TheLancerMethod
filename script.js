document.addEventListener("DOMContentLoaded", () => {
	// === Burger Menu ===
	const burger = document.getElementById("burgerMenu");
	const menuContainer = document.getElementById("menuContainer");

	if (burger && menuContainer) {
		burger.addEventListener("click", () => {
			menuContainer.classList.toggle("active");
		});
	}

	// === Typewriter Effect ===
	const text = "INSPIRE · PLAN · EXECUTE";
	const typingElement = document.getElementById("typing");
	let index = 0;

	function type() {
		if (typingElement && index < text.length) {
			typingElement.innerHTML += text.charAt(index);
			index++;
			setTimeout(type, 100);
		}
	}

	type();
});
