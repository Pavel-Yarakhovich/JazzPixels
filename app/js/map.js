const eventsButton = document.querySelector('.content__events');
const locationsButton = document.querySelector('.content__locations');
const footerLinks = document.querySelectorAll('.footer__map_link');
const eventsLink = document.querySelector('#events_link');
const linkNumberOfNewEvents = document.querySelector('#booked-events');
const buttonNumberOfNewEvents = document.querySelector('#button_booked-events');
const pageHeaders = document.querySelectorAll('.page-header');
let currentLink = '';
const articles = document.querySelectorAll('.content__article');
let newEvents;

document.addEventListener("DOMContentLoaded", () => {
	articles.forEach(art => art.classList.add('event-new'));
	newEvents = articles.length;
	linkNumberOfNewEvents.textContent = newEvents;
	buttonNumberOfNewEvents.textContent = newEvents;
});

const expandNewEvents = () => {
	articles.forEach((art, i) => {
		setTimeout(() => {
			art.classList.remove('content__article-hidden')
		}, (i + 1)* 150);
	})
	eventsButton.classList.add('hidden');
	locationsButton.classList.add('hidden');
	pageHeaders[0].classList.remove('page-header-hidden');
}

const showHeader = () => {
		!currentLink === 'events_link'
			? pageHeaders[0].classList.remove('page-header-hidden')
			: null
}

const togglePages = (e) => {
	!e.target.id === 'feed_link' 
		? e.preventDefault() : null ;
	currentLink = e.target.id;
	
	showHeader();
}


articles.forEach(art => art.addEventListener('click', () => {
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
	}
}));

eventsButton.addEventListener('click', expandNewEvents);
eventsLink.addEventListener('click', expandNewEvents);


footerLinks.forEach(link => 
	link.addEventListener('click', togglePages)
);


