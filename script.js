// Select the video element
const video = document.querySelector(".viewer");
// Select the play/pause toggle button
const toggle = document.querySelector(".toggle");
// Select the progress bar element
const progress = document.querySelector(".progress__filled");
// Select the volume input slider
const volumeInput = document.querySelector("input[name='volume']");
// Select the playback speed input slider
const playbackSpeedInput = document.querySelector(
  "input[name='playbackSpeed']"
);
// Select the rewind button
const rewindButton = document.querySelector(".rewind");
// Select the forward button
const forwardButton = document.querySelector(".forward");

/**
 * Function to toggle between play and pause states
 * Updates the button icon accordingly
 */
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    toggle.textContent = "❚ ❚"; // Change to pause icon
  } else {
    video.pause();
    toggle.textContent = "►"; // Change to play icon
  }
}

/**
 * Function to update the progress bar based on current video time
 * Also resets the play button when video ends
 */
function updateProgress() {
  // Calculate percentage of video played
  const progressFilled = (video.currentTime / video.duration) * 100;
  // Update the width of progress bar
  progress.style.width = `${progressFilled}%`;
  // Reset button to play icon if video has ended
  if (video.ended) {
    toggle.textContent = "►";
  }
}

/**
 * Function to set the video volume based on slider value
 */
function setVolume() {
  video.volume = volumeInput.value;
}

/**
 * Function to set the video playback speed based on slider value
 */
function setPlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

/**
 * Function to skip forward or backward in the video
 * @param {Event} event - The click event object
 */
function skipVideo(event) {
  // Get the skip duration from the data attribute
  const skipDuration = Number(event.target.dataset.skip);
  // Update the current time of the video
  video.currentTime += skipDuration;
}

// Add event listeners for video time updates and progress bar updates
video.addEventListener("timeupdate", updateProgress);
// Add event listener for volume changes
volumeInput.addEventListener("input", setVolume);
// Add event listener for playback speed changes
playbackSpeedInput.addEventListener("input", setPlaybackSpeed);

// Add event listener for play/pause toggle
toggle.addEventListener("click", togglePlayPause);
// Add event listeners for rewind and forward buttons
rewindButton.addEventListener("click", skipVideo);
forwardButton.addEventListener("click", skipVideo);