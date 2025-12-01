// imperative
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function AppJS() {
	let count = 0;

	const appHTML = document.createElement("div");

	const logosDivHTML = document.createElement("div");
	logosDivHTML.className = "logos-container";

	const anchorVite = document.createElement("a");
	anchorVite.href = "https://vite.dev";
	anchorVite.target = "_blank";

	const anchorReact = document.createElement("a");
	anchorReact.href = "https://react.dev";
	anchorReact.target = "_blank";

	const imgViteLogo = document.createElement("img");
	imgViteLogo.src = viteLogo;
	imgViteLogo.className = "logo";
	imgViteLogo.alt = "Vite logo";

	const imgReactLogo = document.createElement("img");
	imgReactLogo.src = reactLogo;
	imgReactLogo.className = "logo react";
	imgReactLogo.alt = "React logo";

	anchorVite.append(imgViteLogo);
	anchorReact.append(imgReactLogo);
	logosDivHTML.append(anchorVite, anchorReact);

	const h1 = document.createElement("h1");
	h1.textContent = "Vite + React";

	const card = document.createElement("div");
	card.className = "card";

	const countButton = document.createElement("button");
	countButton.textContent = `count is ${count}`;
	countButton.addEventListener("click", () => {
		count++;
		countButton.textContent = `count is ${count}`;
	});

	const cardTextHTML = document.createElement("p");
	cardTextHTML.innerHTML = `Edit <code>src/App.jsx</code> and save to test HMR`;

	card.append(countButton, cardTextHTML);

	const readDocsHTML = document.createElement("p");
	readDocsHTML.className = "read-the-docs";
	readDocsHTML.textContent = "Click on the Vite and React logos to learn more";

	let currentYear = new Date().getFullYear();
	const currentYearHTML = document.createElement("h2");
	currentYearHTML.textContent = currentYear;

	appHTML.append(logosDivHTML, h1, card, readDocsHTML, currentYearHTML);

	return (
		appHTML
	);
}

export default AppJS;
