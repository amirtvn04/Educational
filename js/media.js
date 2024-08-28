let activeWaveSurfer = null;

function createWaveSurfer(waveformId, playBtnId, playIconId, pauseIconId, muteBtnId, muteIconId, unmuteIconId, durationId, audioFile, micBtnId, imageId) {
    const playBtn = document.getElementById(playBtnId);
    const playIcon = document.getElementById(playIconId);
    const pauseIcon = document.getElementById(pauseIconId);
    const muteBtn = document.getElementById(muteBtnId);
    const muteIcon = document.getElementById(muteIconId);
    const unmuteIcon = document.getElementById(unmuteIconId);
    const micBtn = document.getElementById(micBtnId);
    const image = document.getElementById(imageId);
    const duration = document.getElementById(durationId);
    // const current = document.getElementById(currentId);

    const timeCalculator = (value) => {
        let seconds = Math.floor(value % 60);
        let minutes = Math.floor((value / 60) % 60);
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }

    const wavesurfer = WaveSurfer.create({
        container: waveformId,
        waveColor: '#635d6a',
        progressColor: '#d8d6da',
        barWidth: 2,
        responsive: true,
        height: 28,
        barRadius: 20,
        barGap: 2,
        cursorWidth: 0
    });

    wavesurfer.load(audioFile);

    wavesurfer.on("ready", () => {
        duration.textContent = timeCalculator(wavesurfer.getDuration());
    });

    playBtn.addEventListener('click', () => {
        if (activeWaveSurfer && activeWaveSurfer !== wavesurfer) {
            activeWaveSurfer.pause();
            activeWaveSurfer.playIcon.classList.remove('hidden');
            activeWaveSurfer.pauseIcon.classList.add('hidden');

            activeWaveSurfer.playBtn.classList.remove('text-dark');
            activeWaveSurfer.playBtn.classList.add('text-white');
            activeWaveSurfer.playBtn.classList.remove('bg-white');
            activeWaveSurfer.playBtn.classList.add('bg-purple');

            activeWaveSurfer.micBtn.classList.remove('bg-purple');
            activeWaveSurfer.micBtn.classList.add('bg-white');
            activeWaveSurfer.micBtn.classList.remove('text-white');
            activeWaveSurfer.micBtn.classList.add('text-purple')

            activeWaveSurfer.image.classList.remove('grayscale-0');
            activeWaveSurfer.image.classList.add('grayscale');
        }

        wavesurfer.playPause();

        if (wavesurfer.isPlaying()) {
            activeWaveSurfer = wavesurfer;
            activeWaveSurfer.playIcon = playIcon;
            activeWaveSurfer.pauseIcon = pauseIcon;
            activeWaveSurfer.playBtn = playBtn;
            activeWaveSurfer.micBtn = micBtn;
            activeWaveSurfer.image = image;

            playBtn.classList.add('text-dark')
            playBtn.classList.remove('text-white');
            playBtn.classList.add('bg-white')
            playBtn.classList.remove('bg-purple');

            micBtn.classList.add('text-white')
            micBtn.classList.remove('text-purple');
            micBtn.classList.add('bg-purple')
            micBtn.classList.remove('bg-white');

            image.classList.add('grayscale-0');
            image.classList.remove('grayscale');
        }
        else {
            playBtn.classList.add('text-white');
            playBtn.classList.remove('text-dark')
            playBtn.classList.add('bg-purple')
            playBtn.classList.remove('bg-white');

            micBtn.classList.add('text-purple')
            micBtn.classList.remove('text-white');
            micBtn.classList.add('bg-white')
            micBtn.classList.remove('bg-purple');

            image.classList.add('grayscale');
            image.classList.remove('grayscale-0');
        }

        playIcon.classList.toggle('hidden');
        pauseIcon.classList.toggle('hidden');
    });

    muteBtn.addEventListener('click', () => {
        if (wavesurfer.getVolume() > 0) {
            wavesurfer.setVolume(0);
            muteIcon.classList.remove('hidden');
            unmuteIcon.classList.add('hidden');
        } else {
            wavesurfer.setVolume(1);
            muteIcon.classList.add('hidden');
            unmuteIcon.classList.remove('hidden');
        }
    });

    // wavesurfer.on("audioprocess", () => {
    //     current.textContent = timeCalculator(wavesurfer.getCurrentTime());
    // });
    //
    // wavesurfer.on("seek", () => {
    //     current.textContent = timeCalculator(wavesurfer.getCurrentTime());
    // });
}

// Initialize
createWaveSurfer("#waveform1", "playBtn1", "playIcon1", "pauseIcon1", "muteBtn1", "mute-Icon1", "unmute-Icon1", "duration1", "music/Daram%20Miram.mp3", 'micBtn1', "image1");
createWaveSurfer("#waveform2", "playBtn2", "playIcon2", "pauseIcon2", "muteBtn2", "mute-Icon2", "unmute-Icon2", "duration2", "music/Ascent.mp3", 'micBtn2', "image2");
createWaveSurfer("#waveform3", "playBtn3", "playIcon3", "pauseIcon3", "muteBtn3", "mute-Icon3", "unmute-Icon3", "duration3", "music/05%20Gerye%20Miayad%20Mara.mp3", 'micBtn3', "image3");
createWaveSurfer("#waveform4", "playBtn4", "playIcon4", "pauseIcon4", "muteBtn4", "mute-Icon4", "unmute-Icon4", "duration4", "music/Mara%20Bebakhsh.mp3", 'micBtn4', "image4");