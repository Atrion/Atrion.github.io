document.addEventListener("DOMContentLoaded", () => {
    // Parse the JSON data
    const hymns = [
        // New hymn data will be inserted here from the JSON file
        // Example format:
        // {
        //     number: "001",
        //     title: "Song Title",
        //     author: "Song Author",
        //     meter: "8.7.8.7.D.",
        //     tuneName: "Tune Name",
        //     verses: [
        //         ["Verse 1, Line 1", "Verse 1, Line 2", "Verse 1, Line 3", "Verse 1, Line 4"],
        //         ["Verse 2, Line 1", "Verse 2, Line 2", "Verse 2, Line 3", "Verse 2, Line 4"]
        //     ],
        //     chorus: ["Chorus Line 1", "Chorus Line 2"],
        //     addedChorus: ["Added Chorus Line 1", "Added Chorus Line 2"]
        // },
    ];
    
        // Convert the parsed hymns to the format needed for the website
    const formattedHymns = hymns.map((hymn, index) => ({
        number: String(hymn.id).padStart(3, '0'),
        title: hymn.title.toUpperCase(),
        lyrics: hymn.verses.map(verse => verse.join('\n')).join('\n\n') +
            (hymn.chorus.length ? `\n\nChorus:\n${hymn.chorus.join('\n')}` : '') +
            (hymn.addedChorus.length ? `\n\nAdded Chorus:\n${hymn.addedChorus.join('\n')}` : ''),
        author: hymn.author,
        meter: hymn.meter,
        tuneName: hymn.tuneName
    }));

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number';
    let currentList = 'all'; // 'all' or 'favorites'
    const hymnList = document.getElementById("hymn-list");
    const hymnDetail = document.getElementById("hymn-detail");
    const hymnDetailTitle = document.getElementById("hymn-detail-title");
    const hymnDetailLyrics = document.getElementById("hymn-detail-lyrics");
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

    // Hymn rendering, sorting, searching, etc., remains the same
    // Render hymns with new data structure
    const renderHymns = (hymnsToRender) => {
        hymnList.innerHTML = "";
        hymnsToRender.forEach(hymn => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h2 data-number="${hymn.number}">
                    <span class="star" data-number="${hymn.number}">
                        ${favorites.includes(hymn.number) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    </span>
                    ${hymn.number}: ${hymn.title}
                </h2>
                <p class="hidden">${hymn.lyrics}</p>
                <p class="hidden"><strong>Author:</strong> ${hymn.author}</p>
                <p class="hidden"><strong>Meter:</strong> ${hymn.meter}</p>
                <p class="hidden"><strong>Tune Name:</strong> ${hymn.tuneName}</p>
            `;
            hymnList.appendChild(li);
        });
        addHymnListeners();
    };

    const sortHymns = (hymnsToSort) => {
        return hymnsToSort.sort((a, b) => {
            if (sortOption === 'number') {
                return a.number.localeCompare(b.number);
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    };

    const filterHymns = (query) => {
        return hymns.filter(hymn => {
            return hymn.title.toLowerCase().includes(query.toLowerCase()) ||
                   hymn.number.includes(query) ||
                   hymn.lyrics.toLowerCase().includes(query.toLowerCase());
        });
    };

    const addHymnListeners = () => {
        document.querySelectorAll("#hymn-list h2").forEach(h2 => {
            h2.addEventListener("click", (event) => {
                const hymnNumber = event.target.closest("h2").dataset.number;
                const hymn = hymns.find(h => h.number === hymnNumber);
                if (hymn && !event.target.classList.contains("star") && !event.target.closest(".star")) {
                    hymnDetailTitle.innerHTML = `
                        <span class="star" data-number="${hymn.number}">
                            ${favorites.includes(hymn.number) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        </span>
                        ${hymn.number}: ${hymn.title}
                    `;
                    hymnDetailLyrics.innerText = hymn.lyrics.trim();
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
                const number = event.target.closest(".star").dataset.number;
                if (favorites.includes(number)) {
                    favorites = favorites.filter(fav => fav !== number);
                } else {
                    favorites.push(number);
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                if (currentList === 'all') {
                    renderHymns(sortHymns(filterHymns(searchInput.value)));
                } else {
                    const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
                    renderHymns(sortHymns(favoriteHymns));
                }
                updateStarIcon(number);
            });
        });
    };

    const updateStarIcon = (number) => {
        document.querySelectorAll(`.star[data-number="${number}"]`).forEach(star => {
            if (favorites.includes(number)) {
                star.innerHTML = '<i class="fas fa-star"></i>';
            } else {
                star.innerHTML = '<i class="far fa-star"></i>';
            }
        });
    };

    const toggleTheme = () => {
        document.body.classList.toggle('light-theme');
    };

    searchInput.addEventListener("input", () => {
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    sortNumberButton.addEventListener("click", () => {
        sortOption = 'number';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    sortTitleButton.addEventListener("click", () => {
        sortOption = 'title';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    viewFavoritesButton.addEventListener("click", () => {
        currentList = 'favorites';
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        renderHymns(sortHymns(favoriteHymns));
    });

    sortNumberButtonBottom.addEventListener("click", () => {
        sortOption = 'number';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    sortTitleButtonBottom.addEventListener("click", () => {
        sortOption = 'title';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    viewFavoritesButtonBottom.addEventListener("click", () => {
        currentList = 'favorites';
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        renderHymns(sortHymns(favoriteHymns));
    });

    switchThemeButton.addEventListener("click", toggleTheme);
    switchThemeButtonBottom.addEventListener("click", toggleTheme);

    const backToListButtons = [backToListButton, backToListFooterButton];
    backToListButtons.forEach(button => {
        button.addEventListener("click", () => {
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
            if (currentList === 'favorites') {
                currentList = 'all';
                renderHymns(sortHymns(filterHymns(searchInput.value)));
            }
        });
    });

    renderHymns(sortHymns(formattedHymns));
});
