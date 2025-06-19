// script.js

// Функция для показа элементов с классом .animate
function animateOnScroll() {
	const animatedElements = document.querySelectorAll(".animate");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.2,
		}
	);

	animatedElements.forEach((el) => {
		observer.observe(el);
	});
}

// Запуск после загрузки
document.addEventListener("DOMContentLoaded", animateOnScroll);
