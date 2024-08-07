document.addEventListener("DOMContentLoaded", () => {
    // Hymn data
    const hymns = [
        // Sample hymns
        {
            number: "039",
            title: "COME EV'RY SOUL BY SIN OPPRESSED",
            lyrics: `
                Come ev'ry soul by sin oppressed- 
                There's mercy with the Lord, 
                And He will surely give you rest 
                By trusting in His word.
                
                Chorus:
                Only trust Him, only trust Him, 
                Only trust Him now; 
                He will save you, He will save you, 
                He will save you now.
                
                For Jesus shed His precious blood 
                Rich blessing to bestow; 
                Plunge now into the crimson flood 
                That washes white as snow.
            `
        },
        {
            number: "049",
            title: "MY SAVIOUR",
            lyrics: `
                I am not skilled to understand 
                What God has willed, what God has planned; 
                I only know at His right hand 
                Is One who is my Saviour.
                
                That He should leave His place on high 
                And come for sinful man to die, 
                You count it strange? So once did I, 
                Before I knew my Saviour.
                
                Yes, living, dying, let me bring 
                My strength, my solace from this spring: 
                That He who lives to be my King 
                Once died to be my Saviour.
            `
        },
        {
            number: "098",
            title: "O HOW I LOVE JESUS",
            lyrics: `
                There is a name I love to hear, 
                I love to sing its worth; 
                It sounds like music to mine ear, 
                The sweetest name on earth.
                
                Chorus: 
                O how I love Jesus, 
                O how I love Jesus, 
                O How I love Jesus- 
                Because he first loved me!
                
                It tells me of a Saviour's love 
                Who died to set me free; 
                It tells me of His precious blood, 
                The sinner's perfect plea.
                
                It tells me what my Father hath 
                In store for ev'ry day, 
                And, tho' I tread a darksome path, 
                Yields sunshine all the way.
                
                It tells of One whose loving heart 
                Can feel my deepest woe, 
                Who in each sorrow bears a part 
                That none can bear below.
            `
        },
        {
            number: "107",
            title: "NOTHING BUT THE BLOOD",
            lyrics: `
                What can wash away my sin?
                Nothing but the blood of Jesus;
                What can make me whole again? 
                Nothing but the blood of Jesus. 
                
                Refrain: 
                O! Precious is the flow
                That makes me white as snow; 
                No other fount I know, 
                Nothing but the blood of Jesus.
                
                For my pardon this I see- 
                Nothing but the blood of Jesus; 
                For my cleansing, this my plea- 
                Nothing but the blood of Jesus.
                
                This is all my hope and peace- 
                Nothing but the blood of Jesus; 
                This is all my righteousness- 
                Nothing but the blood of Jesus.
            `
        },
        {
            number: "133",
            title: "MAN OF SORROWS HALLELUJAH! WHAT A SAVIOUR!",
            lyrics: `
                "Man of Sorrows," what a name 
                For the Son of God who came 
                Ruined sinners to reclaim! 
                Hallelujah! what a Saviour!
                
                Bearing shame and scoffing rude, 
                In my place condemned He stood. 
                Sealed my pardon with His blood; 
                Hallelujah! what a Saviour!
                
                Guilty, vile and helpless we, 
                Spotless Lamb of God was He; 
                "Full atonement!" can it be? 
                Hallelujah! what a Saviour!
                
                Lifted up was He to die, 
                "It is finished!" was His cry; 
                Now in heav'n exalted high. 
                Hallelujah! what a Saviour!
                
                When He comes, our glorious King, 
                All His ransomed home to bring, 
                Then anew His song we'll sing: 
                Hallelujah! what a Saviour!
            `
        },
        // Additional hymns...
    ];

    // Initializing favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number'; // Default sort option
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

    // Render hymns
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
            `;
            hymnList.appendChild(li);
        });
        addHymnListeners();
    };

    // Sort hymns by number or title
    const sortHymns = (hymnsToSort) => {
        return hymnsToSort.sort((a, b) => {
            if (sortOption === 'number') {
                return a.number.localeCompare(b.number);
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    };

    // Filter hymns by search query
    const filterHymns = (query) => {
        return hymns.filter(hymn => {
            return hymn.title.toLowerCase().includes(query.toLowerCase()) ||
                   hymn.number.includes(query) ||
                   hymn.lyrics.toLowerCase().includes(query.toLowerCase());
        });
    };

    // Add click listeners to hymn titles and stars
    const addHymnListeners = () => {
        document.querySelectorAll("#hymn-list h2").forEach(h2 => {
            h2.addEventListener("click", (event) => {
                const hymnNumber = event.target.closest("h2").dataset.number;
                const hymn = hymns.find(h => h.number === hymnNumber);
                if (hymn) {
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
    };

    // Add click listener to stars
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
                renderHymns(sortHymns(filterHymns(searchInput.value)));
            });
        });
    };

    // Toggle theme between light and dark
    const toggleTheme = () => {
        document.body.classList.toggle('light-theme');
    };

    // Search input event listener
    searchInput.addEventListener("input", () => {
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    // Sort by number button event listener
    sortNumberButton.addEventListener("click", () => {
        sortOption = 'number';
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    // Sort by title button event listener
    sortTitleButton.addEventListener("click", () => {
        sortOption = 'title';
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    // View favorites button event listener
    viewFavoritesButton.addEventListener("click", () => {
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        renderHymns(sortHymns(favoriteHymns));
    });

    // Sort by number button (bottom) event listener
    sortNumberButtonBottom.addEventListener("click", () => {
        sortOption = 'number';
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    // Sort by title button (bottom) event listener
    sortTitleButtonBottom.addEventListener("click", () => {
        sortOption = 'title';
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    // View favorites button (bottom) event listener
    viewFavoritesButtonBottom.addEventListener("click", () => {
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        renderHymns(sortHymns(favoriteHymns));
    });

    // Switch theme button event listener
    switchThemeButton.addEventListener("click", toggleTheme);
    switchThemeButtonBottom.addEventListener("click", toggleTheme);

    // Back to list button event listeners
    const backToListButtons = [backToListButton, backToListFooterButton];
    backToListButtons.forEach(button => {
        button.addEventListener("click", () => {
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
        });
    });

    // Initial render of hymns
    renderHymns(sortHymns(hymns));
});
