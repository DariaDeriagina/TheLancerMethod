document.addEventListener("DOMContentLoaded", function () {
	const words = ["INSPIRE", "PLAN", "EXECUTE"];
	const separator = " · ";
	const typingElement = document.getElementById("typing");

	const fullText = words.join(separator); // "INSPIRE · PLAN · EXECUTE"
	let i = 0;

	function type() {
		if (i < fullText.length) {
			typingElement.innerHTML += fullText.charAt(i);
			i++;
			setTimeout(type, 100);
		}
	}

	type();
});
