document.addEventListener("DOMContentLoaded", function () {
	// === Select modal elements ===
	const modal = document.querySelector(".modal-overlay");
	const modalBody = document.querySelector(".modal-body");
	const closeBtn = document.querySelector(".modal-close");

	// === Select all cards (both visible and hidden) ===
	const cards = document.querySelectorAll(".case-card");

	// === Select Show More button (for hidden cards) ===
	const hiddenCards = document.querySelectorAll(".hidden-card");
	const showMoreBtn = document.getElementById("showMoreBtn");

	// === MODAL CONTENT ARRAY (12 objects for 12 cards) ===
	const modalContent = [
		// CARD 1
		{
			title: "FROM LOST TO LIT UP",
			clientType: "Client Type: Early-Stage Explorer | No clear business idea",
			text: "She came in burnt out from corporate life with a million Pinterest boards and zero direction. Together, we got focused.",
			list: [
				"Asked the right questions to get to the why behind her shift",
				"Narrowed 3 passions into one feasible business concept",
				"Outlined a short-term test offer she could try without quitting her job",
				"Created a starter roadmap for how to talk about it, test it, and see if it clicked",
			],
			outcome:
				"She walked away with one idea to commit to—and an actual plan to move forward.",
		},
		// CARD 2
		{
			title: "FROM STUCK TO STARTED",
			clientType: "Client Type: Mid-Career Professional | Just Laid Off",
			text: "After a sudden layoff, he knew he didn’t want to go back to a 9–5—but had no clue what consulting would look like. He felt like he was starting from scratch.",
			list: [
				"Mapped out his transferable skills and niche opportunities",
				"Developed a one-liner pitch and 2 starter services",
				"Built a basic pricing model and client proposal template",
				"Helped him write outreach messages to past contacts",
			],
			outcome:
				"He booked his first 2 discovery calls within a month and had clarity on what he was selling—and to whom.",
		},
		// CARD 3
		{
			title: "FROM CONFUSED TO CLEAR",
			clientType: "Client Type: Solo Therapist | Already In Practice",
			text: "She had clients and great results—but her online presence wasn’t helping her grow. Everything felt too clinical and flat.",
			list: [
				"Rewrote her bio and services to reflect her actual voice",
				"Clarified her niche and repackaged her offers",
				"Created a weekly posting plan for 2 Facebook groups",
				"Drafted her intro messages and a downloadable cheat sheet",
			],
			outcome:
				"She finally felt proud to send people to her site—and landed a new client the first week she posted her intro.",
		},
		// CARD 4
		{
			title: "FROM IDEAS TO INCOME",
			clientType: "Client Type: Creative Freelancer | Part-Time Editor",
			text: "She had a small Instagram and a few clients, but didn’t know how to get more work—or present herself professionally.",
			list: [
				"Rebuilt her resume and LinkedIn with job-attracting keywords",
				"Drafted 3 service packages she could confidently pitch",
				"Created a visual portfolio layout for her website",
				"Wrote outreach messages for local creatives and micro-agencies",
			],
			outcome:
				"She landed a paid editing gig the same week her portfolio went live—and finally had structure around her pricing.",
		},
		// CARD 5
		{
			title: "FROM PAUSE TO PURPOSE",
			clientType: "Client Type: Solo Consultant | Growth Stage",
			text: "She had a steady stream of clients—but no systems, no boundaries, and no real capacity to grow without working more hours. Everything was happening through her inbox and memory, and she felt like she was winging it every day.",
			list: [
				"Audited her current offer suite and found two services to cut or automate",
				"Created a “Next-Level Offer” with clearer outcomes and higher pricing",
				"Built a light-touch onboarding system (proposal, welcome doc, invoice, calendar link)",
				"Outlined a 90-day repurposing plan from old content to increase visibility without more effort",
				"Created a referral email she could send to her current clients at the right moment",
			],
			outcome:
				"She doubled her average client value, cut 5 hours a week in admin work, and finally had breathing room to grow on her terms.",
		},
		// CARD 6
		{
			title: "FROM PRESSURE TO PLAN",
			clientType: "Client Type: Tradesman | Cleaning + AV Service",
			text: "He was picking up workers, doing the jobs, and handling quotes by phone—all while trying to grow. It wasn’t sustainable.",
			list: [
				"Created a repeat client tracker and booking form",
				"Wrote his pricing sheet and basic quote template",
				"Outlined a transportation plan so he didn’t have to drive the crew",
				"Helped him segment his commercial vs. residential offers",
			],
			outcome:
				"He got back 6+ hours a week, increased average ticket size, and had a plan to scale with help.",
		},
		// CARD 7
		{
			title: "FROM BURNOUT TO BALANCE",
			clientType: "Client Type: Author | Memoir-In-Progress",
			text: "She had a half-written manuscript but couldn’t get to the finish line. She felt overwhelmed by formatting, marketing, and wondering, “Does this even matter?”",
			list: [
				"Helped sequence her final chapters and tighten her ending",
				"Gave her a weekly writing goal and accountability plan",
				"Built a checklist for self-publishing vs. querying",
				"Created a basic author bio and back cover blurb",
			],
			outcome:
				"She finally finished her manuscript and knew exactly what to do next.",
		},
		// CARD 8
		{
			title: "FROM HUSTLE TO STRATEGY",
			clientType: "Client Type: ABA Therapy Center Owner | Startup Stage",
			text: "She had the vision for a therapy center serving young children—but didn’t want to be the one running sessions. She was overwhelmed by Medicaid billing, staffing models, and how to actually open.",
			list: [
				"Built a business plan and profit structure for a for-profit ABA center",
				"Created a shared-services model that allows independent BCBAs to collaborate",
				"Drafted an expansion model (LLC + franchise language)",
				"Created Medicaid billing workflows and growth roadmap",
				"Built the offer positioning and value prop for parents + clinicians",
			],
			outcome:
				"She’s now launching with confidence, onboarding her first clients, and has a clear path to grow without being buried in clinical work.",
		},
		// CARD 9
		{
			title: "FROM UNCERTAIN TO UNSTOPPABLE",
			clientType: "Client Type: Recruiter | Inconsistent Bookings",
			text: "He had strong relationships with job seekers—but was stuck when it came to pitching companies. His follow-up was inconsistent, and his messaging sounded just like everyone else.",
			list: [
				"Clarified his unique approach and candidate care process",
				"Rewrote his cold and warm outreach messages for decision-makers",
				"Created a follow-up sequence and soft-close framework",
				"Built 5 LinkedIn post prompts and a visibility calendar",
				"Role-played objection handling to increase confidence",
			],
			outcome:
				"He landed 2 warm leads within the first week using the new messages—and finally felt like he had control over how he shows up.",
		},
		// CARD 10
		{
			title: "FROM SCATTERED TO STRUCTURED",
			clientType: "Client Type: Financial Planner | Recently Let Go",
			text: "She had years of experience helping institutions—but wanted to pivot to serving individuals and families. She had no brand, no packages, and was overwhelmed by the idea of building solo.",
			list: [
				"Outlined 3 tiered service packages based on real-life scenarios",
				"Created an onboarding system for discovery → intake → planning",
				"Built a niche profile and outreach plan for family-focused clients",
				"Drafted a one-page “What to Expect” PDF and testimonial strategy",
				"Reviewed compliance-friendly marketing options",
			],
			outcome:
				"She’s now working with her first 3 independent clients—and said this was the first time she felt excited about financial planning in years.",
		},
		// CARD 11
		{
			title: "FROM DIY TO DONE RIGHT",
			clientType: "Client Type: College Grad | Career Launch Support",
			text: "She had a degree, a few internships, and a lot of anxiety. She wasn’t sure what jobs to apply to—or how to make herself stand out.",
			list: [
				"Rebuilt her resume to be ATS-compatible and value-focused",
				"Rewrote her LinkedIn summary, headline, and skills section",
				"Taught her how to use AI to generate cover letters quickly",
				"Created a job hunt tracker and 2-week outreach strategy",
				"Highlighted 5 key industries where her degree could stand out",
			],
			outcome:
				"She applied to 15 jobs in the first week, got 3 callbacks, and said it was the first time she felt clear and empowered in her job search.",
		},
		// CARD 12
		{
			title: "FROM WAITING TO TAKING ACTION",
			clientType: "Client Type: Tradesman | Cleaning + AV Service",
			text: "He was picking up workers, doing the jobs, and handling quotes by phone—all while trying to grow. It wasn’t sustainable.",
			list: [
				"Created a repeat client tracker and booking form",
				"Wrote his pricing sheet and basic quote template",
				"Outlined a transportation plan so he didn’t have to drive the crew",
				"Helped him segment his commercial vs. residential offers",
			],
			outcome:
				"He got back 6+ hours a week, increased his average ticket size, and finally had a plan to scale with help.",
		},
	];

	// === LOOP THROUGH CARDS AND ASSIGN CLICK HANDLER ===
	cards.forEach((card) => {
		card.addEventListener("click", () => {
			const id = parseInt(card.dataset.id); // get data-id
			const content = modalContent[id - 1]; // match to array (id 1 = index 0)

			// === BUILD MODAL HTML DYNAMICALLY ===
			modalBody.innerHTML = `
        <h3>${content.title}</h3>
        <div class="mobile-client">
          <p class="client-type">
            <span class="client-line-one">${
							content.clientType.split("|")[0]
						}</span>
            <span class="client-line-two">|${
							content.clientType.split("|")[1]
						}</span>
          </p>
        </div>

        <p class="modal-text">${content.text}</p>

        <p class="what-we-did">What we did:</p>

        <ul class="what-we-did-list">
          ${content.list.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <p class="outcome"><strong>Outcome:</strong> ${content.outcome}</p>

        <div class="modal-button-wrapper">
          <div class="mobile-button">
            <a href="https://outlook.office.com/book/TheLancerMethod1@thelancermethod.com/?ismsaljsauthenabled=true"
               class="btn primary"
               alt="Schedule a consultation"
               onclick="gtag('event', 'book_consultation_click', {
                 'event_category': 'Engagement',
                 'event_label': 'Modal Consultation Button'
               })">
               BOOK YOUR FREE CONSULTATION
               <img src="images/mainImages/Schedule.png" alt="Schedule Icon" />
            </a>
          </div>
        </div>
      `;

			modal.style.display = "flex"; // show modal
		});
	});

	// === CLOSE MODAL ON X CLICK ===
	closeBtn.addEventListener("click", () => {
		modal.style.display = "none";
	});

	// === CLOSE MODAL WHEN CLICKING OUTSIDE CONTENT ===
	window.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			modal.style.display = "none";
		}
	});

	// === SHOW MORE/LESS FUNCTIONALITY ===
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

		this.textContent = isExpanded ? "SHOW MORE ↓" : "SHOW LESS ↑";
		isExpanded = !isExpanded;
	});
});
