const initApp = () => {

    const playlistId = location.search.split('=')[1];

    getPlaylist(playlistId);
};

const getPlaylist = async (id) => {

    const url = `http://localhost:3000/playlists/${id}`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const playlist = await response.json();
            console.log(playlist)

            createDetailsHtml(playlist);

        } else {
            throw new Error("Playlist not found", response.statusText, playlist);
        }

    } catch (error) {
        console.log(error);
    }
};

const createDetailsHtml = (playlist) => {

    const detailsContainer = document.querySelector('#details-container');
    const backBtn = document.querySelector('#back-btn');

    let html = '';

    playlist.songs.forEach((song) => {

        html += `<li>${song}</li>`;

    });

    backBtn.addEventListener('click', (e) => {
        location.href = '/index.html';
    });

    detailsContainer.innerHTML = `

    <h1>${playlist.artist}</h1>

    <img src="${playlist.imageUrl}" />

    <h3>Genre: ${playlist.genre}</h3>

    <h2>Songs</h2>

    <ul>
      ${html}
    </ul>

  `;

};

document.addEventListener('DOMContentLoaded', initApp);
