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

	if (art.classList.contains('booked')) {
		if (e.target.className === 'content__article_bookmark') {
			art.classList.remove('booked');
		}
	} else {
		if (art.classList.contains('music')) {
			art.classList.add('booked-displayed-music');
			setTimeout(()=> {
				art.classList.remove('booked-displayed-music');
			}, 1000);
			setTimeout(()=> {
				art.classList.add('booked');
			}, 1010);
			
		} else {
			art.classList.add('booked-displayed');
			setTimeout(()=> {
				art.classList.remove('booked-displayed');
			}, 1000);
			setTimeout(()=> {
				art.classList.add('booked');
			}, 1010);
		}
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
		art.classList.remove('booked-displayed-music');
		e.target.name && !art.classList.contains(e.target.name)
			? art.classList.add('content__article-hidden') 
			: art.classList.contains('booked') && e.target.name === 'music'
				? art.classList.add('booked-displayed-music') 
				: art.classList.contains('booked') && e.target.name
					? art.classList.add('booked-displayed')
					: null
	})
};

toggles.forEach(toggle => 
	toggle.addEventListener('click', toggleSlides)
);



