
const AudioPlayer = ({ audioRef, mp3File }) => {
  return (
    <audio ref={audioRef} src={mp3File} preload="auto" />
  );
};

export default AudioPlayer;
