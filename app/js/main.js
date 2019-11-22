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

	e.target.className === 'content__article_bookmark' && art.classList.contains('booked-displayed')
		? art.classList.remove('booked-displayed')
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

//slides toggle
const toggles = document.querySelectorAll('.slider__toggle');
const slides = document.querySelectorAll('.slide');

const toggleSlides = (e) => {
	slides.forEach((slide, i) => {
		slide.classList.add('slide-unvisible');
		e.target.value == i
			? slide.classList.remove('slide-unvisible') : null;
	});
	toggles.forEach((toggle) => {
		toggle.classList.remove('slider__toggle-active');
		e.target.checked ? toggles[e.target.value].classList.add('slider__toggle-active') : null;
	})
	articles.forEach(art => {
		art.classList.remove('content__article-hidden');
		art.classList.remove('booked-displayed');
		e.target.name && !art.classList.contains(e.target.name)
			? art.classList.add('content__article-hidden') : 
			art.classList.contains('booked') && e.target.name
				? art.classList.add('booked-displayed') : null;
	})
};

toggles.forEach(toggle => 
	toggle.addEventListener('click', toggleSlides)
);



