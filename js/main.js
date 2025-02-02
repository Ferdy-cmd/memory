const row = document.querySelector('.contenedor-carrousel');
const movies = document.querySelectorAll('.movie');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

//------ Event Listener for rightArrow //
rightArrow.addEventListener('click', () => {
    row.scrollBy({
        left: row.offsetWidth,
        behavior: 'smooth', // Smooth scroll
    });

    const indicatorActive = document.querySelector('.indicators .active');
    if (indicatorActive && indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

//------ Event Listener for leftArrow //
leftArrow.addEventListener('click', () => {
    row.scrollBy({
        left: -row.offsetWidth,
        behavior: 'smooth', // Smooth scroll
    });

    const indicatorActive = document.querySelector('.indicators .active');
    if (indicatorActive && indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

//------ Carousel Counter Pages //
const numberPages = Math.ceil(movies.length / 5);
for (let i = 0; i < numberPages; i++) {
    const indicator = document.createElement('button');

    if (i === 0) {
        indicator.classList.add('active');
    }

    document.querySelector('.indicators').appendChild(indicator);
    indicator.addEventListener('click', (e) => {
        row.scrollTo({
            left: i * row.offsetWidth,
            behavior: 'smooth', // Smooth scroll to selected page
        });

        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

//------ Hover Movies //
movies.forEach((movie) => {
    movie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movie => movie.classList.remove('hover'));
            element.classList.add('hover');
        }, 100);
    });
});

row.addEventListener('mouseleave', () => {
    movies.forEach(movie => movie.classList.remove('hover'));
});

//------ Smooth Click for Movies (Optional) //
movies.forEach((movie, index) => {
    movie.addEventListener('click', () => {
        row.scrollTo({
            left: index * movie.offsetWidth,
            behavior: 'smooth', // Smooth scroll when a movie is clicked
        });
    });
});
