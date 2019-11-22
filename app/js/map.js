const eventsButton = document.querySelector('.content__events');
const locationsButton = document.querySelector('.content__locations');
const footerLinks = document.querySelectorAll('.footer__map_link');

const expandEvents = () => {
	articles.forEach((art, i) => {
		setTimeout(() => {
			art.classList.toggle('content__article-hidden')
		}, (i + 1)* 150);
	})
	eventsButton.classList.add('hidden');
	locationsButton.classList.add('hidden');
}

eventsButton.addEventListener('click', expandEvents);

const togglePages = (e) => {
	event.preventDefault(e);
	articles.forEach(art => {
		art.classList.remove('booked-displayed');
		art.classList.contains('booked')
			? art.classList.add('booked-displayed') : null;
	})
};

footerLinks.forEach(link => 
	link.addEventListener('click', togglePages)
);