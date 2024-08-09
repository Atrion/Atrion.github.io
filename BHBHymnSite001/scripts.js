document.addEventListener("DOMContentLoaded", () => {
    const hymns = [
        // Example hymn data (replace with dynamically generated hymn objects from the JSON)
        {
            id: 1,
            title: "Song title",
            author: "Song author",
            meter: "8.7.8.7.D.",
            tuneName: "Deerhurst Lux Eoi Abbot's Leigh",
            verses: [
                [
                    "Verse 1, Line 1",
                    "Verse 1, Line 2",
                    "Verse 1, Line 3",
                    "Verse 1, Line 4"
                ],
                [
                    "Verse 2, Line 1",
                    "Verse 2, Line 2",
                    "Verse 2, Line 3",
                    "Verse 2, Line 4"
                ]
            ],
            chorus: [
                "Chorus, Line 1",
                "Chorus, Line 2"
            ],
            addedChorus: [
                "Added chorus, Line 1",
                "Added chorus, Line 2"
            ]
        }
        // Add other hymns here
    ];

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number';
    let currentList = 'all'; // 'all' or 'favorites'
    const hymnList = document.getElementById("hymn-list");
    const hymnDetail = document.getElementById("hymn-detail");
    const hymnDetailTitle = document.getElementById("hymn-detail-title");
    const hymnDetailLyrics = document.getElementById("hymn-detail-lyrics");
    const hymnDetailAuthor = document.getElementById("hymn-detail-author");
    const hymnDetailMeter = document.getElementById("hymn-detail-meter");
    const hymnDetailTune = document.getElementById("hymn-detail-tune");
    const searchInput = document.getElementById("search");
    const sortNumberButton = document.getElementById("sort-number");
    const sortTitleButton = document.getElementById("sort-title");
    const viewFavoritesButton = document.getElementById("view-favorites");
    const switchThemeButton = document.getElementById("switch-theme");
    const backToListButton = document.getElementById("back-to-list");
    const sortNumberButtonBottom = document.getElementById("sort-number-bottom");
    const sortTitleButtonBottom = document.getElementById("sort-title-bottom");
    const viewFavoritesButtonBottom = document.getElementById("view-favorites-bottom");
    const switchThemeButtonBottom = document.getElementById("switch-theme-bottom");
    const backToListFooterButton = document.getElementById("back-to-list-footer");

    const renderHymns = (hymnsToRender) => {
        hymnList.innerHTML = "";
        hymnsToRender.forEach(hymn => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h2 data-id="${hymn.id}">
                    <span class="star" data-id="${hymn.id}">
                        ${favorites.includes(hymn.id) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    </span>
                    ${hymn.id}: ${hymn.title}
                </h2>
                <p class="hidden">${formatHymnLyrics(hymn)}</p>
            `;
            hymnList.appendChild(li);
        });
        addHymnListeners();
    };

    const formatHymnLyrics = (hymn) => {
        let lyrics = "";
        hymn.verses.forEach((verse, index) => {
            lyrics += `Verse ${index + 1}:\n${verse.join('\n')}\n\n`;
        });
        if (hymn.chorus.length > 0) {
            lyrics += `Chorus:\n${hymn.chorus.join('\n')}\n\n`;
        }
        if (hymn.addedChorus.length > 0) {
            lyrics += `Added Chorus:\n${hymn.addedChorus.join('\n')}\n\n`;
        }
        return lyrics.trim();
    };

    const sortHymns = (hymnsToSort) => {
        return hymnsToSort.sort((a, b) => {
            if (sortOption === 'number') {
                return a.id - b.id;
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    };

    const filterHymns = (query) => {
        return hymns.filter(hymn => {
            return hymn.title.toLowerCase().includes(query.toLowerCase()) ||
                   hymn.id.toString().includes(query) ||
                   formatHymnLyrics(hymn).toLowerCase().includes(query.toLowerCase());
        });
    };

    const addHymnListeners = () => {
        document.querySelectorAll("#hymn-list h2").forEach(h2 => {
            h2.addEventListener("click", (event) => {
                const hymnId = parseInt(event.target.closest("h2").dataset.id, 10);
                const hymn = hymns.find(h => h.id === hymnId);
                if (hymn && !event.target.classList.contains("star") && !event.target.closest(".star")) {
                    hymnDetailTitle.innerHTML = `
                        <span class="star" data-id="${hymn.id}">
                            ${favorites.includes(hymn.id) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        </span>
                        ${hymn.id}: ${hymn.title}
                    `;
                    hymnDetailLyrics.innerText = formatHymnLyrics(hymn).trim();
                    hymnDetailAuthor.innerText = `Author: ${hymn.author}`;
                    hymnDetailMeter.innerText = `Meter: ${hymn.meter}`;
                    hymnDetailTune.innerText = `Tune: ${hymn.tuneName}`;
                    hymnList.classList.add("hidden");
                    hymnDetail.classList.remove("hidden");
                    addStarClickListener();
                }
            });
        });

        addStarClickListener();
    };

    const addStarClickListener = () => {
        document.querySelectorAll(".star").forEach(star => {
            star.addEventListener("click", (event) => {
                event.stopPropagation();
                const id = parseInt(event.target.closest(".star").dataset.id, 10);
                if (favorites.includes(id)) {
                    favorites = favorites.filter(fav => fav !== id);
                } else {
                    favorites.push(id);
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                if (currentList === 'all') {
                    renderHymns(sortHymns(filterHymns(searchInput.value)));
                } else {
                    const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.id));
                    renderHymns(sortHymns(favoriteHymns));
                }
                updateStarIcon(id);
            });
        });
    };

    const updateStarIcon = (id) => {
        document.querySelectorAll(`.star[data-id="${id}"]`).forEach(star => {
            if (favorites.includes(id)) {
                star.innerHTML = '<i class="fas fa-star"></i>';
            } else {
                star.innerHTML = '<i class="far fa-star"></i>';
            }
        });
    };

    const init = () => {
        renderHymns(sortHymns(hymns));
        addHymnListeners();

        searchInput.addEventListener("input", () => {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        });

        sortNumberButton.addEventListener("click", () => {
            sortOption = 'number';
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        });

        sortTitleButton.addEventListener("click", () => {
            sortOption = 'title';
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        });

        viewFavoritesButton.addEventListener("click", () => {
            currentList = 'favorites';
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.id));
            renderHymns(sortHymns(favoriteHymns));
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
        });

        switchThemeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });

        backToListButton.addEventListener("click", () => {
            currentList = 'all';
            renderHymns(sortHymns(filterHymns(searchInput.value)));
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
        });

        // Footer buttons
        sortNumberButtonBottom.addEventListener("click", () => {
            sortOption = 'number';
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        });

        sortTitleButtonBottom.addEventListener("click", () => {
            sortOption = 'title';
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        });

        viewFavoritesButtonBottom.addEventListener("click", () => {
            currentList = 'favorites';
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.id));
            renderHymns(sortHymns(favoriteHymns));
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
        });

        switchThemeButtonBottom.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });

        backToListFooterButton.addEventListener("click", () => {
            currentList = 'all';
            renderHymns(sortHymns(filterHymns(searchInput.value)));
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
        });
    };

    init();
});
