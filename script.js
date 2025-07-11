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
//=======About Me section
const toggleBtn = document.getElementById("toggleAbout");
const shortBlock = document.getElementById("aboutShort");
const fullBlock = document.getElementById("aboutFull");

toggleBtn.addEventListener("click", () => {
	fullBlock.classList.toggle("hidden");
	if (fullBlock.classList.contains("hidden")) {
		toggleBtn.innerText = "READ MORE ↓";
		window.scrollTo({ top: shortBlock.offsetTop - 100, behavior: "smooth" });
	} else {
		toggleBtn.innerText = "SHOW LESS ↑";
	}
});
// Fade-up animation for sections
document.addEventListener("DOMContentLoaded", () => {
	const fadeEls = document.querySelectorAll(".fade-up");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.2 }
	);

	fadeEls.forEach((el) => observer.observe(el));
});
