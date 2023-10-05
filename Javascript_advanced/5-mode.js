function changeMode(size, weight, transform, background, color) {
	document.documentElement.style['font-size'] = size;
	document.documentElement.style['font-weight'] = weight;
	document.documentElement.style['text-transform'] = transform;
	document.documentElement.style['background-color'] = background;
	document.documentElement.style['color'] = color;
}

function main() {
	const myP = document.createElement('p');
	myP.textContent = 'Welcome Holberton!';
	document.body.appendChild(myP);

	const spooky = document.createElement('button');
	spooky.textContent = 'Spooky';
	document.body.appendChild(spooky);

	spooky.onclick = function() {
		changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	}

	const darkMode = document.createElement('button');
	darkMode.textContent = 'Dark mode';
	document.body.appendChild(darkMode);

	darkMode.onclick = function() {
		changeMode(12, 'bold', 'capitalize', 'black', 'white');
	}

	const screamMode = document.createElement('button');
	screamMode.textContent = 'Scream mode';
	document.body.appendChild(screamMode);

	screamMode.onclick = function() {
		changeMode(12, 'normal', 'lowercase', 'white', 'black');
	}
}

main()
