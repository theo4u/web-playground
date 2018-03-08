var options = {
  audio: false,
  video: { width: 640, height: 480 }
}
navigator.mediaDevices
  .getUserMedia(options)
  .then(success)
  .catch(error)

function success (stream) {
  var video = document.getElementById('video')
  video.srcObject = stream
}

function error (error) {
  console.log(error)
}
