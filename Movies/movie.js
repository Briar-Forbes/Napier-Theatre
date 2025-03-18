// Function to fetch movie data from JSON file
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
function displayMovies(movies) {
    const container = document.getElementById('movies-container');
    container.innerHTML = ""; // Clear previous movies

    movies.forEach(movie => {
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
                <a href="${movie.trailer}" target="_blank" class="trailer-btn">🎥 Watch Trailer</a>
            </div>
        `;

        container.appendChild(movieCard);
    });
}

// Call fetchMovies on page load
document.addEventListener("DOMContentLoaded", fetchMovies);
