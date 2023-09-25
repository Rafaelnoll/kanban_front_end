function formatSecondsToMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${formatedMinutes}:${formatedSeconds}`;
}

export default formatSecondsToMinutes;
