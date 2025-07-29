document.addEventListener("DOMContentLoaded", () => {
	// 1️⃣ Load header.html
	fetch("header.html")
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then((data) => {
			// 2️⃣ Insert header content into the placeholder div
			document.getElementById("header-placeholder").innerHTML = data;

			console.log("✅ Header loaded successfully!");

			// 3️⃣ Attach burger menu functionality ONLY after header is loaded
			const burger = document.getElementById("burgerMenu");
			const menuContainer = document.getElementById("menuContainer");

			if (burger && menuContainer) {
				console.log("✅ Burger menu initialized!");

				// ✅ Toggle menu on burger click
				burger.addEventListener("click", () => {
					menuContainer.classList.toggle("active");
					console.log(
						"🍔 Menu toggled:",
						menuContainer.classList.contains("active")
					);
				});

				// ✅ Close menu when any link is clicked (MOBILE)
				document.querySelectorAll(".menu-container a").forEach((link) => {
					link.addEventListener("click", () => {
						if (window.innerWidth <= 768) {
							menuContainer.classList.remove("active");
							console.log("🔗 Menu closed after link click");
						}
					});
				});

				// ✅ Close menu when scrolling (MOBILE)
				document.addEventListener("scroll", () => {
					if (
						window.innerWidth <= 768 &&
						menuContainer.classList.contains("active")
					) {
						menuContainer.classList.remove("active");
						console.log("📱 Menu closed on scroll");
					}
				});
			} else {
				console.warn("⚠️ Burger menu elements not found in header.html");
			}
		})
		.catch((err) => console.error("❌ HEADER NOT LOADED:", err));

	// ✅ Force navbar-dark on blog pages
	if (document.body.classList.contains("blog-page")) {
		const navbar = document.querySelector(".navbar");
		if (navbar) navbar.classList.add("navbar-dark");
	}
});
