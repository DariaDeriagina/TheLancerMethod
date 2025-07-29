document.addEventListener("DOMContentLoaded", () => {
	// === Burger Menu Toggle ===
	const burger = document.getElementById("burgerMenu");
	const menuContainer = document.getElementById("menuContainer");

	if (burger && menuContainer) {
		burger.addEventListener("click", () => {
			menuContainer.classList.toggle("active");
		});

		// ✅ Close menu when mobile nav link is clicked
		document.querySelectorAll(".menu-container a").forEach((link) => {
			link.addEventListener("click", () => {
				if (window.innerWidth <= 768) {
					menuContainer.classList.remove("active");
				}
			});
		});

		// ✅ Auto-close menu on scroll (MOBILE ONLY)
		window.addEventListener("scroll", () => {
			if (
				window.innerWidth <= 768 &&
				menuContainer.classList.contains("active")
			) {
				menuContainer.classList.remove("active");
				console.log("📱 Menu closed on scroll");
			}
		});
	}

	// === Typewriter Effect ===
	const typingElement = document.getElementById("typing");
	const text = "INSPIRE · PLAN · EXECUTE";
	let index = 0;

	function type() {
		if (typingElement && index < text.length) {
			typingElement.innerHTML += text.charAt(index);
			index++;
			setTimeout(type, 100);
		}
	}
	if (typingElement) type();

	// === About Me Toggle ===
	const toggleBtn = document.getElementById("toggleAbout");
	const shortBlock = document.getElementById("aboutShort");
	const fullBlock = document.getElementById("aboutFull");

	if (toggleBtn && shortBlock && fullBlock) {
		toggleBtn.addEventListener("click", () => {
			fullBlock.classList.toggle("hidden");
			toggleBtn.innerText = fullBlock.classList.contains("hidden")
				? "READ MORE ↓"
				: "SHOW LESS ↑";

			if (fullBlock.classList.contains("hidden")) {
				window.scrollTo({
					top: shortBlock.offsetTop - 100,
					behavior: "smooth",
				});
			}
		});
	}

	// === Fade-Up Scroll Animation ===
	const fadeEls = document.querySelectorAll(".fade-up");

	if (fadeEls.length > 0) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		fadeEls.forEach((el) => observer.observe(el));
	}

	// === Form Submission with Redirect ===
	const form = document.getElementById("bookingForm");

	if (form) {
		form.addEventListener("submit", async function (e) {
			e.preventDefault();

			const data = new FormData(form);

			try {
				const resp = await fetch(form.action, {
					method: "POST",
					body: data,
					headers: { Accept: "application/json" },
				});

				if (!resp.ok) {
					const err = await resp.json();
					throw new Error(err.error || "Form submission failed");
				}

				alert("Thank you! We’ve received your request.");
				setTimeout(() => {
					window.location.href =
						"https://outlook.office.com/book/TheLancerMethod1@thelancermethod.com/?ismsaljsauthenabled=true";
				}, 500);
			} catch (error) {
				console.error(error);
				alert("Sorry—something went wrong. Please try again later.");
			}
		});
	}
});
