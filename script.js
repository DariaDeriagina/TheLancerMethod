document.addEventListener("DOMContentLoaded", () => {
	// === Burger Menu Toggle ===
	const burger = document.getElementById("burgerMenu");
	const menuContainer = document.getElementById("menuContainer");

	if (burger && menuContainer) {
		burger.addEventListener("click", () => {
			menuContainer.classList.toggle("active");
		});
	}
	// Auto-close menu on scroll (mobile only)
	window.addEventListener("scroll", () => {
		if (
			window.innerWidth <= 768 &&
			menuContainer.classList.contains("active")
		) {
			menuContainer.classList.remove("active");
		}
	});
	// Close menu on mobile nav item click
	document.querySelectorAll(".menu-container a").forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth <= 768) {
				menuContainer.classList.remove("active");
			}
		});
	});

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
	}

	// === Testimonials Slider ===
	const slider = document.querySelector(".testimonials-slider");
	const cards = document.querySelectorAll(".testimonial-card");
	const nextBtn = document.getElementById("nextBtn");
	const prevBtn = document.getElementById("prevBtn");

	if (!slider || cards.length === 0 || !nextBtn || !prevBtn) return;

	let currentIndex = 0;
	let cardWidth = 0;
	let visibleCards = 1;
	const totalCards = cards.length;
	let maxIndex = 0;

	function getVisibleCardCount() {
		if (window.innerWidth <= 768) return 1;
		if (window.innerWidth <= 1024) return 2;
		return 3;
	}

	function updateCardWidth() {
		visibleCards = getVisibleCardCount();
		const cardRect = cards[0].getBoundingClientRect();
		const style = window.getComputedStyle(cards[0]);
		let gap = parseInt(style.marginRight || style.gap || 20); // fallback
		cardWidth = cardRect.width + gap;

		maxIndex = Math.max(0, totalCards - visibleCards);
		updateSlider();
	}

	function updateButtonState() {
		prevBtn.classList.toggle("inactive", currentIndex === 0);
		nextBtn.classList.toggle("inactive", currentIndex >= maxIndex);
	}

	nextBtn.addEventListener("click", () => {
		if (currentIndex < maxIndex) {
			currentIndex++;
			updateSlider();
		}
	});

	prevBtn.addEventListener("click", () => {
		if (currentIndex > 0) {
			currentIndex--;
			updateSlider();
		}
	});

	window.addEventListener("resize", updateCardWidth);
	updateCardWidth(); // Run on load

	// === Expand/Collapse for Testimonial "Read More" Links ===
	document.querySelectorAll(".testimonial-card .read-more").forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const moreText = this.parentElement.querySelector(".more-text");
			moreText.classList.toggle("hidden");
			this.textContent = moreText.classList.contains("hidden")
				? "Read More →"
				: "Show Less ↑";
		});
	});

	function updateSlider() {
		currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
		const translateX = -(cardWidth * currentIndex);

		// Temporarily disable scroll snap (fixes issues on iOS Chrome)
		slider.style.scrollSnapType = "none";
		slider.style.transform = `translateX(${translateX}px)`;

		setTimeout(() => {
			slider.style.scrollSnapType = "x mandatory"; // re-enable after animation
		}, 300);

		updateButtonState();
	}

	// ——————————————————————————————
	// Formspree + Outlook redirect with alert + delay
	// ——————————————————————————————
	const form = document.getElementById("bookingForm");

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

			// ✅ Show message, then go to Outlook
			alert("Thank you! We’ve received your request.");
			setTimeout(() => {
				window.location.href =
					"https://outlook.office.com/book/TheLancerMethod1@thelancermethod.com/?ismsaljsauthenabled=true";
			}, 500); // 0.5 second delay
		} catch (error) {
			console.error(error);
			alert("Sorry—something went wrong. Please try again later.");
		}
	});

	// ——————————————————————————————
	// Testimonials Fade up effect
	// ——————————————————————————————

	document.addEventListener("DOMContentLoaded", function () {
		const fadeUps = document.querySelectorAll(".fade-up");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		fadeUps.forEach((el) => observer.observe(el));
	});
});
