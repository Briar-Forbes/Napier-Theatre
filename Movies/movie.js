//GET DATA FROM movies.json
async function fetchMovies() {
    try {
        const response = await fetch('Movies/movies.json'); // GET FILE
        const movies = await response.json(); // CONVERT TO JAVA ARRAY
        displayMovies(movies); // DISPLAY
    } catch (error) {
        console.error("JSON MOVIE ERROR: ", error);
    }
}

// GENERATE MOVIE CARDS
function displayMovies(movies) {
    const container = document.getElementById('movies-container');
    container.innerHTML = ""; // CLEAR MOVIES

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <div class="movie-details">
                <p class="genre">${movie.genre}</p>
                <h2 class="title">${movie.name}</h2>

                <div class="info">
                    <div class="rating">${movie.rating}</div>
                    <span class="length">${movie.length}</span>
                </div>

                <p class="description">${movie.description}</p>
                <a href="${movie.trailer}" target="_blank" class="trailer-btn">🎥 Watch Trailer</a>
            </div>

            <div class="movie-poster" style="background-image: url('${movie.poster}')">
                <span class="type">${movie.type}</span>
                <div class="date-overlay">
                    <span class="date">${movie.date}</span>
                </div>
            </div>
        `;

        container.appendChild(movieCard);
    });
}

// INSTANTIATE MOVIES ON LOAD
document.addEventListener("DOMContentLoaded", fetchMovies);
