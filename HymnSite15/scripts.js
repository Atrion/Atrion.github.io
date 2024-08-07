document.addEventListener("DOMContentLoaded", () => {
    let hymns = [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number'; // Default sorting option

    const hymnList = document.getElementById("hymn-list");
    const searchInput = document.getElementById("search");
    const sortNumberButton = document.getElementById("sort-number");
    const sortTitleButton = document.getElementById("sort-title");
    const viewFavoritesButton = document.getElementById("view-favorites");

    // Load hymns from JSON file
    fetch('hymns.json')
        .then(response => response.json())
        .then(data => {
            hymns = data;
            renderHymns(sortHymns(hymns));
        });

    function renderHymns(hymnsToDisplay) {
        hymnList.innerHTML = "";
        hymnsToDisplay.forEach(hymn => {
            const hymnItem = document.createElement("li");
            hymnItem.innerHTML = `
                <h2 data-number="${hymn.number}">${favorites.includes(hymn.number) ? '?' : '?'} ${hymn.number} - ${hymn.title}</h2>
            `;
            hymnList.appendChild(hymnItem);
        });

        const hymnTitles = document.querySelectorAll("h2");
        hymnTitles.forEach(title => {
            title.addEventListener("click", () => {
                const hymnNumber = title.getAttribute('data-number');
                openHymn(hymnNumber);
            });
        });

        addStarClickListener();
    }

    function openHymn(number) {
        const hymn = hymns.find(hymn => hymn.number === number);
        if (!hymn) return;

        hymnList.innerHTML = `
            <h2>${favorites.includes(hymn.number) ? '?' : '?'} ${hymn.number} - ${hymn.title}</h2>
            <p>${hymn.lyrics.replace(/\n/g, '<br>')}</p>
            <footer>
                <button id="back-to-list">Back to List</button>
                <button id="prev-hymn">Previous</button>
                <button id="next-hymn">Next</button>
                <button id="view-favorites">View Favorites</button>
            </footer>
        `;

        document.querySelector("h2").addEventListener("click", () => toggleFavorite(hymn.number));
        document.getElementById("back-to-list").addEventListener("click", () => renderHymns(sortHymns(hymns)));
        document.getElementById("prev-hymn").addEventListener("click", () => navigateHymn(number, -1));
        document.getElementById("next-hymn").addEventListener("click", () => navigateHymn(number, 1));
        document.getElementById("view-favorites").addEventListener("click", viewFavorites);
    }

    function navigateHymn(currentNumber, direction) {
        const currentIndex = hymns.findIndex(hymn => hymn.number === currentNumber);
        const newIndex = (currentIndex + direction + hymns.length) % hymns.length;
        openHymn(hymns[newIndex].number);
    }

    function toggleFavorite(number) {
        const index = favorites.indexOf(number);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(number);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderHymns(sortHymns(hymns));
    }

    function addStarClickListener() {
        const stars = document.querySelectorAll("h2");
        stars.forEach(star => {
            star.addEventListener("click", (e) => {
                e.stopPropagation();
                const number = star.getAttribute("data-number");
                toggleFavorite(number);
                updateStarIcon(star, number);
            });
        });
    }

    function updateStarIcon(element, number) {
        if (favorites.includes(number)) {
            element.innerHTML = element.innerHTML.replace('?', '?');
        } else {
            element.innerHTML = element.innerHTML.replace('?', '?');
        }
    }

    function viewFavorites() {
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        renderHymns(sortHymns(favoriteHymns));
    }

    function sortHymns(hymnsToSort) {
        if (sortOption === 'number') {
            return hymnsToSort.sort((a, b) => a.number.localeCompare(b.number));
        } else if (sortOption === 'title') {
            return hymnsToSort.sort((a, b) => a.title.localeCompare(b.title));
        }
        return hymnsToSort;
    }

    searchInput.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredHymns = hymns.filter(hymn =>
            hymn.title.toLowerCase().includes(searchText) ||
            hymn.number.includes(searchText) ||
            hymn.lyrics.toLowerCase().includes(searchText)
        );
        renderHymns(sortHymns(filteredHymns));
    });

    sortNumberButton.addEventListener("click", () => {
        sortOption = 'number';
        renderHymns(sortHymns(hymns));
    });

    sortTitleButton.addEventListener("click", () => {
        sortOption = 'title';
        renderHymns(sortHymns(hymns));
    });

    viewFavoritesButton.addEventListener("click", viewFavorites);
});
