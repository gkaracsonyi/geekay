const mp4Files = <%= JSON.stringify(mp4Files) %>;

const videoContainer = document.getElementById('video-container');

mp4Files.forEach(file => {
    const video = document.createElement('video');
    video.src = `/static/${file}`;
    video.controls = true;
    videoContainer.appendChild(video);
});