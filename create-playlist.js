document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.querySelector('#playlist-form');
    const backBtn = document.querySelector('#go-back-btn');

    backBtn.addEventListener('click', (e) => {
        location.href = '/index.html';
    });

    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        const url = 'http://localhost:3000/playlists';

        const newPlaylist = {

            artist: document.querySelector('#artist').value,
            genre: document.querySelector('#genre').value,
            imageUrl: document.querySelector('#imageUrl').value,
            songs: document.querySelector('#songs').value.split(',')
        };

        try {

            const response = await fetch(url, {

                method: 'POST',
                body: JSON.stringify(newPlaylist)
            });

            if (response.ok) {
                location.href = '/index.html';
            }

        } catch (error) {
            console.log(error);
        }
    });
});