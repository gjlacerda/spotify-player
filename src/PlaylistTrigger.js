const $albumTracks = document.getElementById('album-tracks');
let audioObject = null;

export default function PlaylistTrigger() {
    $albumTracks.addEventListener('click', (event) => {
        const target = event.target.parentNode;
        if (target.classList.contains('active')) {
            audioObject.pause();
        } 
        else {
            if (audioObject) {
                audioObject.pause();
            }
            audioObject = new Audio(target.getAttribute('data-track-preview'));
            audioObject.play();
            audioObject.addEventListener('pause', () => {
                target.classList.remove('active');
            });

            target.classList.add('active');
        }
    });
}