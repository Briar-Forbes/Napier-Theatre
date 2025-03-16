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
            <ul>
                <li>
                    <h3>${movie.type}</h3>
                    <div class="Poster" style="background-image: url('${movie.poster}')">${movie.date}</div>
                </li>

                <li>
                    <p>${movie.genre}</p>
                    <h2>${movie.name}</h2>

                    <div class="Rating">${movie.rating}</div>
                    <a>${movie.length}</a>
                    <p>${movie.description}</p>
                    
                    <button class="trailer" href="${movie.trailer}">🎥 Watch Trailer</button>
                </li>
            </ul>
        `;

        container.appendChild(movieCard);
    });
}

// Call fetchMovies on page load
document.addEventListener("DOMContentLoaded", fetchMovies);
