const initApp = () => {
    loadPlaylists();
};

const loadPlaylists = async () => {
    const url = 'http://localhost:3000/playlists';

    try {
        const response = await fetch(url);

        if (response.ok) {

            const playlists = await response.json();

            generatePlaylists(playlists);

        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error.message);
    }
};

const generatePlaylists = (playlists) => {

    const section = document.querySelector('#playlist-section');

    let html = '';

    playlists.forEach((playlist) => {
        html += `
      <section class="card">

        <img src="${playlist.imageUrl}" id="${playlist.id}"/>

        <h3>${playlist.artist}</h3>

        <p>${playlist.genre}</p>

      </section>`;

    });

    section.innerHTML = html;

    const images = document.querySelectorAll('.card img');

    images.forEach((image) => {

        image.addEventListener('click', () => {

            const playlistId = image.getAttribute('id');

            location.href = `./playlist-detail.html?id=${playlistId}`;
        });
    });
};

document.addEventListener('DOMContentLoaded', initApp);