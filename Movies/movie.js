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
            <img src="${movie.poster}" alt="${movie.name} Poster">
            <h2>${movie.name}</h2>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Length:</strong> ${movie.length}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Release Date:</strong> ${movie.date}</p>
            <p>${movie.description}</p>
            <a class="trailer-btn" href="${movie.trailer}" target="_blank">🎥 Watch Trailer</a>
        `;

        container.appendChild(movieCard);
    });
}

// Call fetchMovies on page load
document.addEventListener("DOMContentLoaded", fetchMovies);
