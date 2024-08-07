document.addEventListener("DOMContentLoaded", () => {
    let hymns = [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number'; // Default sorting option

    const hymnList = document.getElementById("hymn-list");
    const searchInput = document.getElementById("search");
    const sortNumberButton = document.getElementById("sort-number");
    const sortTitleButton = document.getElementById("sort-title");
    const viewFavoritesButton = document.getElementById("view-favorites");
    const switchThemeButton = document.getElementById("switch-theme");

    // Fetch hymns from hymns.json
    fetch('hymns.json')
        .then(response => response.json())
        .then(data => {
            hymns = data;
            renderHymns(sortHymns(hymns));
        })
        .catch(error => console.error('Error fetching hymns:', error));

    // Function to render hymns
    function renderHymns(hymnsToRender) {
        hymnList.innerHTML = "";
        hymnsToRender.forEach(hymn => {
            const hymnItem = document.createElement("li");
            hymnItem.innerHTML = `
                <span class="star" data-number="${hymn.number}">${favorites.includes(hymn.number) ? '?' : '?'}</span>
                <h2 data-number="${hymn.number}">${hymn.number} - ${hymn.title}</h2>
            `;
            hymnList.appendChild(hymnItem);
        });

        // Add event listeners for hymn titles and stars
        addTitleClickListeners();
        addStarClickListeners();
    }

    function addTitleClickListeners() {
        const hymnTitles = document.querySelectorAll("h2");
        hymnTitles.forEach(title => {
            title.addEventListener("click", () => {
                const hymnNumber = title.getAttribute('data-number');
                openHymn(hymnNumber);
            });
        });
    }

    function addStarClickListeners() {
        const stars = document.querySelectorAll(".star");
        stars.forEach(star => {
            star.addEventListener("click", event => {
                const hymnNumber = star.getAttribute('data-number');
                toggleFavorite(hymnNumber);
                event.stopPropagation(); // Prevent triggering the title click event
            });
        });
    }

    function openHymn(number) {
        const hymn = hymns.find(h => h.number === number);
        if (!hymn) return;

        hymnList.innerHTML = `
            <span class="star" data-number="${hymn.number}">${favorites.includes(hymn.number) ? '?' : '?'}</span>
            <h2>${hymn.number} - ${hymn.title}</h2>
            <p>${hymn.lyrics.replace(/\n/g, '<br>')}</p>
        `;

        addStarClickListeners(); // Update star click listener for the hymn view
    }

    function toggleFavorite(number) {
        const index = favorites.indexOf(number);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(number);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateStarIcon(number);
    }

    function updateStarIcon(number) {
        const stars = document.querySelectorAll(`.star[data-number="${number}"]`);
        stars.forEach(star => {
            star.textContent = favorites.includes(number) ? '?' : '?';
        });
    }

    function viewFavorites() {
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        renderHymns(sortHymns(favoriteHymns));
    }

    function sortHymns(hymnsToSort) {
        return hymnsToSort.sort((a, b) => {
            if (sortOption === 'number') {
                return a.number.localeCompare(b.number);
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    }

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredHymns = hymns.filter(hymn => 
            hymn.title.toLowerCase().includes(query) || 
            hymn.number.includes(query) ||
            hymn.lyrics.toLowerCase().includes(query)
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

    switchThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Ensure back to list button works correctly
    const backToListButton = document.getElementById("back-to-list");
    backToListButton.addEventListener("click", () => {
        renderHymns(sortHymns(hymns));
    });
});
