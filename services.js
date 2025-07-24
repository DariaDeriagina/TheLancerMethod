document.addEventListener("DOMContentLoaded", () => {
	// Burger menu toggle
	const burger = document.getElementById("burgerMenu");
	const menu = document.getElementById("menuContainer");

	if (burger && menu) {
		burger.addEventListener("click", () => {
			menu.classList.toggle("active");
		});

		// Auto-close on scroll (mobile)
		window.addEventListener("scroll", () => {
			if (window.innerWidth <= 768 && menu.classList.contains("active")) {
				menu.classList.remove("active");
			}
		});

		// Close on nav link click (mobile)
		document.querySelectorAll(".menu-container a").forEach((link) => {
			link.addEventListener("click", () => {
				if (window.innerWidth <= 768) {
					menu.classList.remove("active");
				}
			});
		});
	}

	// Fade-up animation
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

//FAQ
document.querySelectorAll(".faq-question").forEach((btn) => {
	btn.addEventListener("click", () => {
		const item = btn.parentElement;
		const isOpen = item.classList.contains("active");

		// Close all
		document.querySelectorAll(".faq-item").forEach((el) => {
			el.classList.remove("active");
			el.querySelector(".faq-toggle").textContent = "+";
		});

		// Open current if not already open
		if (!isOpen) {
			item.classList.add("active");
			item.querySelector(".faq-toggle").textContent = "✕";
		}
	});
});
