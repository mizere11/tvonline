// JavaScript function to show the movie section
function showMovieSection() {
    document.getElementById("movie-section").classList.remove("hidden");
    document.getElementById("series-section").classList.add("hidden");
    document.getElementById("about-section").classList.add("hidden");
}

// JavaScript function to show the series section
function showSeriesSection() {
    document.getElementById("movie-section").classList.add("hidden");
    document.getElementById("series-section").classList.remove("hidden");
    document.getElementById("about-section").classList.add("hidden");
}

// JavaScript function to show the about section
function showAboutSection() {
    document.getElementById("movie-section").classList.add("hidden");
    document.getElementById("series-section").classList.add("hidden");
    document.getElementById("about-section").classList.remove("hidden");
}
