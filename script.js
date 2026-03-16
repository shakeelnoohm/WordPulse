const textAreaContent = document.querySelector("#content");
const clearBtn = document.querySelector("#clear-text");
const copyBtn = document.querySelector("#copy-btn");

function analyzeText(input) {
	const charCount = input.length;
	const charCountNoSpaces = input.replace(/\s/g, "").length;
	const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
	const sentenceCount = input.split(/[.!?]/).length - 1;
	const paragraphCount = input.trim() ? input.split(/\n\s*\n/).length : 0;
	return { charCount, charCountNoSpaces, wordCount, sentenceCount, paragraphCount };
}

function formatMinutesToTimeString(minutes) {
	if (typeof minutes !== "number" || isNaN(minutes)) return "Invalid input";

	const mins = Math.floor(minutes);
	const secs = Math.round((minutes - mins) * 60);

	if (mins === 0 && secs === 0) return "0 s";

	let result = "";
	if (mins > 0) result += `${mins}m`;
	if (secs > 0) {
		if (mins > 0) result += " ";
		result += `${secs}s`;
	}

	return result;
}

function displayContent(objOfCounting, objOfTime) {
	const displayCharacters = document.querySelector("#display-characters");
	const displayCharactersNoSpaces = document.querySelector("#display-characters-no-spaces");
	const displayWords = document.querySelector("#display-words");
	const displaySentences = document.querySelector("#display-sentences");
	const displayParagraphs = document.querySelector("#display-paragraphs");

	const displayReading = document.querySelector("#display-reading");
	const displaySpeaking = document.querySelector("#display-speaking");

	displayCharacters.textContent = objOfCounting.charCount;
	displayCharactersNoSpaces.textContent = objOfCounting.charCountNoSpaces;
	displayWords.textContent = objOfCounting.wordCount;
	displaySentences.textContent = objOfCounting.sentenceCount;
	displayParagraphs.textContent = objOfCounting.paragraphCount;

	displayReading.textContent = objOfTime.readingTimeMinutes;
	displaySpeaking.textContent = objOfTime.speakingTimeMinutes;
}

function calculateTimeEstimates(inputText) {
	const wordsPerMinuteReading = 200;
	const wordsPerMinuteSpeaking = 150;

	const wordCount = inputText.trim().split(/\s+/).length;

	let readingTimeMinutes = wordCount / wordsPerMinuteReading;
	let speakingTimeMinutes = wordCount / wordsPerMinuteSpeaking;

	readingTimeMinutes = formatMinutesToTimeString(readingTimeMinutes);
	speakingTimeMinutes = formatMinutesToTimeString(speakingTimeMinutes);

	return { readingTimeMinutes, speakingTimeMinutes };
}

textAreaContent.addEventListener("input", () => {
	const objOfCounting = analyzeText(textAreaContent.value);
	const objOfTime = calculateTimeEstimates(textAreaContent.value);
	displayContent(objOfCounting, objOfTime);
});

clearBtn.addEventListener("click", () => {
	textAreaContent.value = "";

	const objOfCounting = analyzeText("");
	const objOfTime = calculateTimeEstimates("");

	displayContent(objOfCounting, objOfTime);

	textAreaContent.focus();
});

copyBtn.addEventListener("click", () => {
	const text = textAreaContent.value;

	navigator.clipboard.writeText(text);

	copyBtn.textContent = "Copied!";
	
	setTimeout(() => {
		copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copy Text';
	}, 1500);
});