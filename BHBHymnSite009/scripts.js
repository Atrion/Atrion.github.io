
document.getElementById('hymn-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const hymnId = event.target.dataset.id;
        const hymn = hymns.find(hymn => hymn.id === hymnId);
        const hymnDetailTitle = document.getElementById('hymn-detail-title');
        const hymnDetailLyrics = document.getElementById('hymn-detail-lyrics');

        let hymnContent = '';
        if (hymn.number) hymnContent += hymn.number + '\n';
        if (hymn.title) hymnContent += hymn.title + '\n';
        if (hymn.author) hymnContent += 'Author: ' + hymn.author + '\n';
        if (hymn.meter) hymnContent += 'Meter: ' + hymn.meter + '\n';
        if (hymn.tuneName) hymnContent += 'Tune: ' + hymn.tuneName + '\n\n';  // Add blank line between tuneName and lyrics
        if (hymn.lyrics) hymnContent += hymn.lyrics.join('\n\n') + '\n\n';  // Add blank line between lyrics and chorus
        if (hymn.Chorus) hymnContent += 'Chorus:\n' + hymn.Chorus + '\n\n';  // Add blank line between chorus and added chorus
        if (hymn.addedChorus) hymnContent += 'Added Chorus:\n' + hymn.addedChorus + '\n';

        hymnDetailTitle.textContent = hymn.title;
        hymnDetailLyrics.textContent = hymnContent;

        document.getElementById('hymn-detail').classList.remove('hidden');
        document.getElementById('hymn-list').classList.add('hidden');
    }
});
