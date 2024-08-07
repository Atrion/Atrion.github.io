document.addEventListener("DOMContentLoaded", () => {
    const hymns = [
        {
            number: "001",
            title: "Abba, Father! we approach Thee",
            author: "James George Deck",
            lyrics: `
                Abba, Father! we approach Thee
                In our Saviour’s precious name;
                We, Thy children, here assembling,
                Access to Thy presence claim;
                From our sin His blood hath washed us:
                ’Tis through Him our souls draw near,
                And Thy Spirit, too, hath taught us,
                Abba, Father! name so dear.
                
                Once as prodigals we wandered
                In our folly, far from Thee;
                But Thy grace, o’er sin abounding,
                Rescued us from misery:
                Thou Thy prodigals hast pardoned,
                Loved us with a Father’s love;
                Welcomed us with joy o’erflowing,
                E’en to dwell with Thee above.
                
                Clothed in garments of salvation,
                At Thy table is our place;
                We rejoice, and Thou rejoicest,
                In the riches of Thy grace:
                It is meet, we hear Thee saying,
                We should merry be and glad;
                I have found My once lost children,
                Now they live who once were dead.
                
                Abba, Father! all adore Thee,
                All rejoice in heaven above;
                While in us they learn the wonders
                Of Thy wisdom, power and love;
                Soon, before Thy throne assembled,
                All Thy children shall proclaim,
                Glory, everlasting glory,
                Be to God and to the Lamb.
                
                OPTIONAL: Verse 1 of Hymn #2
                Abba, Father! we adore Thee,
                Humbly now our homage pay:
                ’Tis Thy children’s bliss to know Thee,
                Welcomed through the living way:
                This high honour we inherit,
                Thy free gift through Jesus’ blood;
                God the Spirit, with our spirit,
                Witnesseth we’re sons of God.
            `
        },
        {
            number: "002",
            title: "Abba, Father! we adore Thee",
            author: "Robert Hawker",
            lyrics: `
                Abba, Father! we adore Thee,
                Humbly now our homage pay:
                ’Tis Thy children’s bliss to know Thee,
                Welcomed through the living way:
                This high honour we inherit,
                Thy free gift through Jesus’ blood;
                God the Spirit, with our spirit,
                Witnesseth we’re sons of God.
                
                Thine own purpose gave us being,
                When, in Christ, in that vast plan
                Thou in Christ didst choose Thy people
                E’en before the world began:
                O what love the Father bore us!
                O how precious in Thy sight!
                When Thou gav’st Thy Church to Jesus,
                Jesus, Son of Thy delight.
                
                Though our nature’s fall in Adam
                Shut us wholly out from God,
                Thine eternal counsel brought us
                Nearer still, through Jesus’ blood;
                For in Him we found redemption,
                Grace and glory in Thy Son;
                Oh, the height and depth of mercy!
                Christ and His redeemed are one.
                
                Hence, through all the changing seasons,
                Trouble, sickness, sorrow, woe,
                Nothing changeth God’s affections,
                Love divine shall bring us through;
                Soon shall all Thy blood-bought children
                Round the throne their anthems raise,
                And, in songs of rich salvation,
                Shout to God’s eternal praise.
            `
        },
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

    renderHymns(sortHymns(hymns));
});
