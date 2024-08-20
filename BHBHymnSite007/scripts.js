
document.addEventListener('DOMContentLoaded', function () {
    const hymnListElement = document.getElementById('hymn-list');
    const hymnDetailElement = document.getElementById('hymn-detail');
    const hymnTitleElement = document.getElementById('hymn-detail-title');
    const hymnLyricsElement = document.getElementById('hymn-detail-lyrics');

    // Sample hymn data, in actual implementation this would be fetched or read from a source
    const hymns = [
        {
            title: 'Amazing Grace',
            author: 'John Newton',
            meter: '8.6.8.6',
            tuneName: 'NEW BRITAIN',
            lyrics: 'Amazing grace! how sweet the sound, That saved a wretch; like me!',
            Chorus: 'Praise the Lord, my heart with His love is beaming...',
            addedChorus: 'This is an added chorus',
        },
        // Other hymns...
    ];

    hymns.forEach(hymn => {
        const hymnItem = document.createElement('li');
        hymnItem.textContent = hymn.title;
        hymnItem.addEventListener('click', () => {
            hymnTitleElement.textContent = hymn.title;
            hymnLyricsElement.innerHTML = `
                <p><strong>Author:</strong> ${hymn.author}</p>
                <p><strong>Meter:</strong> ${hymn.meter}</p>
                <p><strong>Tune Name:</strong> ${hymn.tuneName}</p>
                <p><br></p>
                <p>${hymn.lyrics}</p>
                ${hymn.Chorus ? `<p><br><strong>Chorus:</strong><br>${hymn.Chorus}</p>` : ''}
                ${hymn.addedChorus ? `<p><br><strong>Added Chorus:</strong><br>${hymn.addedChorus}</p>` : ''}
            `;
            hymnListElement.classList.add('hidden');
            hymnDetailElement.classList.remove('hidden');
        });
        hymnListElement.appendChild(hymnItem);
    });

    document.getElementById('back-to-list').addEventListener('click', () => {
        hymnDetailElement.classList.add('hidden');
        hymnListElement.classList.remove('hidden');
    });
});
