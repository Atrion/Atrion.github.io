document.addEventListener("DOMContentLoaded", () => {
    const hymns = [
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
        }
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
                
                This is all my hope and pe???- 
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
                "It is finished," was His cry; 
                Now in heaven exalted high; 
                Hallelujah! what a Saviour!
                
                When He comes, our glorious King, 
                All His ransomed home to bring, 
                Then anew this song we'll sing; 
                Hallelujah! what a Saviour!
            `
        },
        // ... more hymns
    ];

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number'; // Default sorting option
    let theme = localStorage.getItem('theme') || 'dark'; // Default theme

    const hymnList = document.getElementById("hymn-list");
    const searchInput = document.getElementById("search");
    const sortNumberButton = document.getElementById("sort-number");
    const sortTitleButton = document.getElementById("sort-title");
    const viewFavoritesButton = document.getElementById("view-favorites");
    const themeSwitchButton = document.getElementById("theme-switch");

    function displayHymns(hymnsToDisplay) {
        hymnList.innerHTML = "";
        hymnsToDisplay.forEach(hymn => {
            const hymnItem = document.createElement("li");
            hymnItem.innerHTML = `
                <h2 data-number="${hymn.number}">${hymn.number} - ${hymn.title}</h2>
                <span class="star" data-number="${hymn.number}">${favorites.includes(hymn.number) ? '&#9733;' : '&#9734;'}</span>
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

        const stars = document.querySelectorAll(".star");
        stars.forEach(star => {
            star.addEventListener("click", (e) => {
                e.stopPropagation();
                const hymnNumber = star.getAttribute('data-number');
                toggleFavorite(hymnNumber);
                star.innerHTML = favorites.includes(hymnNumber) ? '&#9733;' : '&#9734;';
            });
        });
    }

    function openHymn(number) {
        const hymn = hymns.find(hymn => hymn.number === number);
        if (!hymn) return;

        hymnList.innerHTML = `
            <h2>${hymn.number} - ${hymn.title}</h2>
            <span class="star" data-number="${hymn.number}">${favorites.includes(hymn.number) ? '&#9733;' : '&#9734;'}</span>
            <p>${hymn.lyrics.replace(/\n/g, '<br>')}</p>
            <footer>
                <button id="back-to-list">Back to List</button>
                <button id="prev-hymn">Previous</button>
                <button id="next-hymn">Next</button>
                <button id="view-favorites">View Favorites</button>
            </footer>
        `;

        document.querySelector(".star").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(hymn.number);
            document.querySelector(".star").innerHTML = favorites.includes(hymn.number) ? '&#9733;' : '&#9734;';
        });
        document.getElementById("back-to-list").addEventListener("click", () => displayHymns(sortHymns(hymns, sortOption)));
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
    }

    function viewFavorites() {
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        displayHymns(sortHymns(favoriteHymns, sortOption));
    }

    function sortHymns(hymnsToSort, option) {
        return hymnsToSort.sort((a, b) => {
            if (option === 'number') {
                return a.number.localeCompare(b.number);
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    }

    function switchTheme() {
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
        applyTheme();
    }

    function applyTheme() {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredHymns = hymns.filter(hymn => 
            hymn.title.toLowerCase().includes(query) || 
            hymn.number.includes(query)
        );
        displayHymns(sortHymns(filteredHymns, sortOption));
    });

    sortNumberButton.addEventListener("click", () => {
        sortOption = 'number';
        displayHymns(sortHymns(hymns, sortOption));
    });

    sortTitleButton.addEventListener("click", () => {
        sortOption = 'title';
        displayHymns(sortHymns(hymns, sortOption));
    });

    viewFavoritesButton.addEventListener("click", viewFavorites);
    themeSwitchButton.addEventListener("click", switchTheme);

    applyTheme();
    displayHymns(sortHymns(hymns, sortOption));
});
