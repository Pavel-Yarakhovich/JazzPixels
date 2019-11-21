const articles = document.querySelectorAll('.content__article');
let events = 0;
const bookedEvents = document.querySelector('#booked-events');

const checkEvents = () => {
	articles.forEach(art => (art.classList.contains('event') && art.classList.contains('booked'))
	? events++
	: null
	) 
}

articles.forEach(art => art.addEventListener('click', (e) => {
	e.target.className === 'content__article_bookmark'
	? art.classList.toggle('booked')
	: null

	art.classList.contains('event')
	? art.classList.contains('booked')
		? events++
		: events--
	: null

	if ( events > 0 ) {
		bookedEvents.classList.add('booked-events');
		bookedEvents.textContent = events;
	} else {
		bookedEvents.classList.remove('booked-events')
	}
}) )


