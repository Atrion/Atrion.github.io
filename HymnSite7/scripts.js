document.addEventListener('DOMContentLoaded', function() {
    // Initial setup
    updateFavoritesView();

    // Event listeners
    document.getElementById('sort-number').addEventListener('click', sortByNumber);
    document.getElementById('sort-title').addEventListener('click', sortByTitle);
    document.getElementById('view-favorites').addEventListener('click', viewFavorites);
    document.getElementById('switch-theme').addEventListener('click', switchTheme);

    // Example function to toggle favorite
    function toggleFavorite(hymnId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(hymnId)) {
            favorites = favorites.filter(id => id !== hymnId);
        } else {
            favorites.push(hymnId);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesView();
    }

    // Function to update the view based on favorites
    function updateFavoritesView() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        document.querySelectorAll('.hymn').forEach(function(hymn) {
            let hymnId = hymn.getAttribute('data-id');
            let star = hymn.querySelector('.star');
            if (favorites.includes(hymnId)) {
                star.classList.add('filled');
                star.innerHTML = '&#9733;'; // Filled star
            } else {
                star.classList.remove('filled');
                star.innerHTML = '&#9734;'; // Empty star
            }
        });
    }

    // Functions for sorting and viewing favorites
    function sortByNumber() {
        // Implement sorting by number logic here
    }

    function sortByTitle() {
        // Implement sorting by title logic here
    }

    function viewFavorites() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        document.querySelectorAll('.hymn').forEach(function(hymn) {
            let hymnId = hymn.getAttribute('data-id');
            if (favorites.includes(hymnId)) {
                hymn.style.display = 'block';
            } else {
                hymn.style.display = 'none';
            }
        });
    }

    // Function to switch theme
    function switchTheme() {
        document.body.classList.toggle('light-theme');
    }

    // Expose the toggleFavorite function to the global scope
    window.toggleFavorite = toggleFavorite;
});
