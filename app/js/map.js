const eventsButton = document.querySelector('.content__events');
const locationsButton = document.querySelector('.content__locations');
const footerLinks = document.querySelectorAll('.footer__map_link');
const eventsLink = document.querySelector('#events_link');
const linkNumberOfNewEvents = document.querySelector('#booked-events');
const buttonNumberOfNewEvents = document.querySelector('#button_booked-events');
const pageHeaders = document.querySelectorAll('.page-header');
const articles = document.querySelectorAll('.content__article');
const contentMap = document.querySelector('.content-map');

let currentLink = '';
let newEvents;

document.addEventListener("DOMContentLoaded", () => {
	articles.forEach(art => art.classList.add('event-new'));
	newEvents = articles.length;
	linkNumberOfNewEvents.textContent = newEvents;
	buttonNumberOfNewEvents.textContent = newEvents;
});

const expandNewEvents = () => {
	pageHeaders.forEach(header => {
		header.classList.add('page-header-hidden');
	})
	articles.forEach((art, i) => {
		setTimeout(() => {
			art.classList.remove('content__article-hidden')
		}, (i + 1)* 150);
	})
	eventsButton.classList.add('hidden');
	locationsButton.classList.add('hidden');
	contentMap.classList.add('content-map-opened');
}

const showHeader = () => {
		currentLink === 'events_link'
			? pageHeaders[0].classList.remove('page-header-hidden')
			: pageHeaders[0].classList.add('page-header-hidden')
}

const togglePages = (e) => {
	!e.target.id === 'feed_link' 
		? e.preventDefault() : null ;
	currentLink = e.target.id;
	
	showHeader();
}

articles.forEach(art => art.addEventListener('click', (e) => {
	if (art.classList.contains('event-new')) { 
		art.classList.remove('event-new');
		art.classList.add('booked-displayed');
		setTimeout(()=> {
			art.classList.remove('booked-displayed');
			art.classList.add('booked')
		}, 1000);
		newEvents--;
		linkNumberOfNewEvents.textContent = newEvents;
		buttonNumberOfNewEvents.textContent = newEvents;
	} else {
		art.classList.contains('booked') &&
		e.target.className === 'content__article_bookmark'
			? art.classList.remove('booked')
			: null
	}
}));

eventsButton.addEventListener('click', () => {
	expandNewEvents();
	pageHeaders[0].classList.remove('page-header-hidden');
});
locationsButton.addEventListener('click', () => {
	expandNewEvents();
	pageHeaders[1].classList.remove('page-header-hidden');
});
eventsLink.addEventListener('click', expandNewEvents);

footerLinks.forEach(link => 
	link.addEventListener('click', togglePages)
);


