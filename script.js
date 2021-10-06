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

streamVideoRequest();

startButton.addEventListener("click", async () => {
  await videoContainer.requestPictureInPicture();
});
