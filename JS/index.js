// -SLIDESHOW-

    const slides = document.querySelector(".slides");
    const dotsContainer = document.querySelector(".dots");
    const slideImages = slides.querySelectorAll("img");
    let index = 0, count = slideImages.length;

    slides.style.width = `${count * 100}vw`;

    for (let i = 0; i < count; i++) {
        let dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => show(i);
        dotsContainer.appendChild(dot);
    }

    function show(i) {
        index = i;
        slides.style.transform = `translateX(${-i * 100}vw)`;

        document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
        dotsContainer.children[i].classList.add("active");
    }

    show(0);
    setInterval(() => show((index + 1) % count), 7000);

// END -SLIDESHOW-

// -MOVIES-

    async function fetchMovies() {
        try {
            const response = await fetch('Movies/movies.json'); // Fetch the JSON file
            const movies = await response.json(); // Convert to JavaScript array
            displayMovies(movies); // Call function to display movies
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    // Function to generate movie cards dynamically
    async function displayMovies(movies) {
        const container = document.getElementById('movies-container');

        for (const movie of movies) {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <div class="movie-section">
                    <div class="type">${movie.type}</div>
                    <div class="movie-poster" style="background-image: url('${movie.poster}')">
                        <div class="date-overlay"><span class="date">${movie.date}</span></div>
                    </div>
                </div>

                <div class="movie-details">
                    <p class="genre">${movie.genre}</p>
                    <h2 class="title">${movie.name}</h2>

                    <div class="info">
                        <div class="rating">${movie.rating}</div>
                        <span class="length">${movie.length}</span>
                    </div>

                    <p class="description">${movie.description}</p>
                    <a href="${movie.trailer}" target="_blank" class="trailer-btn">▶ Watch Trailer</a>
                </div>
            `;

            container.appendChild(movieCard);

            // WAIT .3s TO ADD THE NEXT MOVIE
                await new Promise(resolve => setTimeout(resolve, 500));
        }
    }


    // CALL ON LOAD
        document.addEventListener("DOMContentLoaded", fetchMovies);

//END -MOVIES-