document.addEventListener("DOMContentLoaded", function () {
	const modal = document.querySelector(".modal-overlay");
	const modalBody = document.querySelector(".modal-body");
	const closeBtn = document.querySelector(".modal-close");

	const cards = document.querySelectorAll(".case-card");
	const hiddenCards = document.querySelectorAll(".hidden-card");
	const showMoreBtn = document.getElementById("showMoreBtn");

	cards.forEach((card) => {
		card.addEventListener("click", () => {
			modalBody.innerHTML = `
        <h3>FROM LOST TO LIT UP</h3>
        <p><strong>Client Type:</strong> Early-Stage Explorer</p>
        <p>She came in burnt out from corporate life with a million Pinterest boards and zero direction. Together, we got focused.</p>
        <ul>
          <li>Narrowed 3 passions into one business idea</li>
          <li>Planned a test offer</li>
          <li>Created a launch plan</li>
        </ul>
        <p><strong>Outcome:</strong> She walked away with clarity and a roadmap.</p>
        <a href="contact.html" class="btn-read">Book Your Free Consultation</a>
      `;
			modal.style.display = "flex";
		});
	});

	closeBtn.addEventListener("click", () => {
		modal.style.display = "none";
	});

	window.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			modal.style.display = "none";
		}
	});
	let isExpanded = false;

	showMoreBtn.addEventListener("click", function () {
		hiddenCards.forEach((card) => {
			if (isExpanded) {
				card.classList.remove("revealed");
				card.style.display = "none";
			} else {
				card.classList.add("revealed");
				card.style.display = "block";
			}
		});

		// Toggle button label
		this.textContent = isExpanded ? "SHOW MORE ↓" : "SHOW LESS ↑";
		isExpanded = !isExpanded;
	});
});
