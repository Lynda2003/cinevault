// ===================================
// CONFIGURATION
// ===================================
const API_KEY = "3d08292886cf723d13f42d557f300bc1";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// ===================================
// ÉLÉMENTS DOM
// ===================================
const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const noResults = document.getElementById("noResults");
const sectionTitle = document.getElementById("sectionTitle");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");

// ===================================
// ÉTAT DE L'APPLICATION
// ===================================
let currentCategory = "popular";

// ===================================
// INITIALISATION
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  loadMovies(currentCategory);
  initEventListeners();
  loadTheme();
});

// ===================================
// EVENT LISTENERS
// ===================================
function initEventListeners() {
  // Recherche
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) searchMovies(query);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) searchMovies(query);
    }
  });

  // Filtres
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      loadMovies(currentCategory);
    });
  });

  // Thème
  themeToggle.addEventListener("click", toggleTheme);
}

// ===================================
// FONCTIONS API
// ===================================
async function loadMovies(category) {
  showLoading();
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=fr-FR&page=1`
    );
    const data = await response.json();
    displayMovies(data.results);
    updateSectionTitle(category);
  } catch (error) {
    console.error("Erreur lors du chargement des films:", error);
    showError("Erreur lors du chargement des films");
  } finally {
    hideLoading();
  }
}

async function searchMovies(query) {
  showLoading();
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    displayMovies(data.results);
    sectionTitle.textContent = `Résultats pour "${query}"`;

    if (data.results.length === 0) {
      showNoResults();
    }
  } catch (error) {
    console.error("Erreur lors de la recherche:", error);
    showError("Erreur lors de la recherche");
  } finally {
    hideLoading();
  }
}

// ===================================
// AFFICHAGE
// ===================================
function displayMovies(movies) {
  moviesGrid.innerHTML = "";

  if (movies.length === 0) {
    showNoResults();
    return;
  }

  hideNoResults();

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    moviesGrid.appendChild(card);
  });
}

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  const posterPath = movie.poster_path
    ? `${IMG_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=Pas+d%27image";

  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  card.innerHTML = `
        <img 
            src="${posterPath}" 
            alt="${movie.title}" 
            class="movie-poster"
            loading="lazy"
        >
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${year}</span>
                <span class="movie-rating">
                    ⭐ ${rating}
                </span>
            </div>
        </div>
    `;

  // Effet de survol
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

  return card;
}

// ===================================
// UTILITAIRES
// ===================================
function showLoading() {
  loading.classList.remove("hidden");
  moviesGrid.classList.add("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
  moviesGrid.classList.remove("hidden");
}

function showNoResults() {
  noResults.classList.remove("hidden");
  moviesGrid.classList.add("hidden");
}

function hideNoResults() {
  noResults.classList.add("hidden");
  moviesGrid.classList.remove("hidden");
}

function showError(message) {
  moviesGrid.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">${message}</p>`;
}

function updateSectionTitle(category) {
  const titles = {
    popular: "Films Populaires",
    top_rated: "Films Mieux Notés",
    upcoming: "Films À Venir",
  };
  sectionTitle.textContent = titles[category] || "Films";
}

// ===================================
// THÈME
// ===================================
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector(".theme-icon");
  icon.textContent = theme === "dark" ? "☀️" : "🌙";
}
