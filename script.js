// captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

const startButton = document.getElementById("captureVideo");
const videoContainer = document.getElementById("videoContainer");

// Sending Stream Promt Request To The User
async function streamVideoRequest() {
  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoContainer.srcObject = captureStream;
    videoContainer.onloadedmetadata = () => {
      videoContainer.play();
    };
  } catch (error) {
    console.error(error);
  }
}

// As soon as the page is loaded, the screen capture is requested
streamVideoRequest();

// Button event listener listens for user to toggle the "picture in picture" mode
startButton.addEventListener("click", async () => {
  await videoContainer.requestPictureInPicture();
});
