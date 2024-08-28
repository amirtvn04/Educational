playBtn.addEventListener('click', () => {
    if (activeWaveSurfer && activeWaveSurfer !== wavesurfer) {
        activeWaveSurfer.pause();
        activeWaveSurfer.playIcon.classList.remove('hidden');
        activeWaveSurfer.pauseIcon.classList.add('hidden');

        // تغییر رنگ دکمه قبلی به حالت stopped
        activeWaveSurfer.playBtn.classList.remove('playing');
        activeWaveSurfer.playBtn.classList.add('stopped');
    }

    wavesurfer.playPause();

    if (wavesurfer.isPlaying()) {
        activeWaveSurfer = wavesurfer;
        activeWaveSurfer.playIcon = playIcon;
        activeWaveSurfer.pauseIcon = pauseIcon;
        activeWaveSurfer.playBtn = playBtn;

        // تغییر رنگ دکمه جاری به حالت playing
        playBtn.classList.add('playing');
        playBtn.classList.remove('stopped');
    } else {
        // اگر پخش متوقف شد، رنگ را به حالت stopped برگردانید
        playBtn.classList.add('stopped');
        playBtn.classList.remove('playing');
    }

    playIcon.classList.toggle('hidden');
    pauseIcon.classList.toggle('hidden');
});