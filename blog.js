document.addEventListener("DOMContentLoaded", () => {
	console.log("✅ Blog loaded");

	// 📊 Progress bar scroll width
	window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;
		document.getElementById("progress-bar").style.width = scrollPercent + "%";
	});

	// ✨ Fade-in elements on scroll
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

	document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});
