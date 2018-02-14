import spotify from './spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

function makeRequest(albumId) {
    spotify.album.getAlbum(albumId)
        .then(data => renderAlbumInfo(data, $albumInfo))
        .then(data => renderAlbumTracks(data.tracks.items, $albumTracks));
}

const $listAlbums = document.getElementById('album-list');
const $albumInfo = document.getElementById('album-info');
const $albumTracks = document.getElementById('album-tracks');

export default function selectAlbumTrigger() {
    $listAlbums.addEventListener('click', (e) => {
        e.preventDefault();
        makeRequest(e.target.getAttribute('data-album-id'));
    });
}