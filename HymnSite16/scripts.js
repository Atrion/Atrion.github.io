document.addEventListener("DOMContentLoaded", () => {
    // Hymns data is now imported from hymns.js
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Load favorites from localStorage
    let sortOption = 'number'; // Default sorting option
    let currentList = 'hymn-list'; // Keeps track of the current list being viewed

    const hymnList = document.getElementById("hymn-list");
    const searchInput = document.getElementById("search");
    const sortNumberButton = document.getElementById("sort-number");
    const sortTitleButton = document.getElementById("sort-title");
    const viewFavoritesButton = document.getElementById("view-favorites");
    const sortNumberButtonFooter = document.getElementById("sort-number-footer");
    const sortTitleButtonFooter = document.getElementById("sort-title-footer");
    const viewFavoritesButtonFooter = document.getElementById("view-favorites-footer");
    const toggleThemeButton = document.getElementById("toggle-theme");
    const toggleThemeButtonFooter = document.getElementById("toggle-theme-footer");

    // Render hymns to the list
    function renderHymns(hymnsToDisplay) {
        hymnList.innerHTML = "";
        hymnsToDisplay.forEach(hymn => {
            const hymnItem = document.createElement("li");
            hymnItem.innerHTML = `
                <span class="star" data-number="${hymn.number}">${favorites.includes(hymn.number) ? '?' : '?'}</span>
                <h2 data-number="${hymn.number}">${hymn.number} - ${hymn.title}</h2>
            `;
            hymnList.appendChild(hymnItem);
        });

        addStarClickListener();
        addTitleClickListener();
    }

    // Add event listeners to star icons
    function addStarClickListener() {
        const stars = document.querySelectorAll(".star");
        stars.forEach(star => {
            star.addEventListener("click", (event) => {
                const hymnNumber = event.target.getAttribute('data-number');
                toggleFavorite(hymnNumber);
                updateStarIcon(event.target, hymnNumber);
                event.stopPropagation();
            });
        });
    }

    // Add event listeners to hymn titles
    function addTitleClickListener() {
        const hymnTitles = document.querySelectorAll("h2");
        hymnTitles.forEach(title => {
            title.addEventListener("click", () => {
                const hymnNumber = title.getAttribute('data-number');
                openHymn(hymnNumber);
            });
        });
    }

    // Open a hymn to view its lyrics
    function openHymn(number) {
        const hymn = hymns.find(hymn => hymn.number === number);
        if (!hymn) return;

        hymnList.innerHTML = `
            <span class="star" data-number="${hymn.number}">${favorites.includes(hymn.number) ? '?' : '?'}</span>
            <h2>${hymn.number} - ${hymn.title}</h2>
            <p>${hymn.lyrics.replace(/\n/g, '<br>')}</p>
            <footer>
                <button id="back-to-list">Back to List</button>
                <button id="prev-hymn">Previous Hymn</button>
                <button id="next-hymn">Next Hymn</button>
            </footer>
        `;

        document.getElementById("back-to-list").addEventListener("click", backToList);
        document.getElementById("prev-hymn").addEventListener("click", () => navigateHymn(-1));
        document.getElementById("next-hymn").addEventListener("click", () => navigateHymn(1));
        addStarClickListener();
    }

    // Go back to the list of hymns
    function backToList() {
        if (currentList === 'favorites') {
            renderHymns(favorites.map(fav => hymns.find(hymn => hymn.number === fav)));
        } else {
            renderHymns(hymns);
        }
    }

    // Navigate to the previous or next hymn
    function navigateHymn(direction) {
        const currentHymnNumber = document.querySelector("h2").getAttribute('data-number');
        const currentIndex = hymns.findIndex(hymn => hymn.number === currentHymnNumber);
        const newIndex = (currentIndex + direction + hymns.length) % hymns.length;
        openHymn(hymns[newIndex].number);
    }

    // Toggle the favorite status of a hymn
    function toggleFavorite(number) {
        if (favorites.includes(number)) {
            favorites = favorites.filter(fav => fav !== number);
        } else {
            favorites.push(number);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // Update the star icon when favorite status changes
    function updateStarIcon(starElement, hymnNumber) {
        if (favorites.includes(hymnNumber)) {
            starElement.textContent = '?';
        } else {
            starElement.textContent = '?';
        }
    }

    // Filter hymns based on search input
    function filterHymns() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredHymns = hymns.filter(hymn =>
            hymn.title.toLowerCase().includes(searchTerm) ||
            hymn.lyrics.toLowerCase().includes(searchTerm) ||
            hymn.number.includes(searchTerm)
        );
        renderHymns(filteredHymns);
    }

    // Sort hymns by number or title
    function sortHymns(by) {
        if (by === 'number') {
            hymns.sort((a, b) => a.number.localeCompare(b.number));
        } else {
            hymns.sort((a, b) => a.title.localeCompare(b.title));
        }
        renderHymns(hymns);
    }

    searchInput.addEventListener("input", filterHymns);
    sortNumberButton.addEventListener("click", () => sortHymns('number'));
    sortTitleButton.addEventListener("click", () => sortHymns('title'));
    sortNumberButtonFooter.addEventListener("click", () => sortHymns('number'));
    sortTitleButtonFooter.addEventListener("click", () => sortHymns('title'));
    viewFavoritesButton.addEventListener("click", () => {
        currentList = 'favorites';
        renderHymns(favorites.map(fav => hymns.find(hymn => hymn.number === fav)));
    });
    viewFavoritesButtonFooter.addEventListener("click", () => {
        currentList = 'favorites';
        renderHymns(favorites.map(fav => hymns.find(hymn => hymn.number === fav)));
    });
    toggleThemeButton.addEventListener("click", toggleTheme);
    toggleThemeButtonFooter.addEventListener("click", toggleTheme);

    // Initial render
    renderHymns(hymns);
});
