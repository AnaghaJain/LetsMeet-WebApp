// const { Socket } = require("net");
let participants = 1;
const socket = io("/");
const videoFrame = document.getElementById("video-frame");

const peer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "4100",
});

const videoSelf = document.createElement("video");
videoSelf.muted = true;
let videoSelfStream;

const peers = {};
navigator.mediaDevices
  .getUserMedia({
    audio: true,
    video: true,
  })
  .then((stream) => {
    videoSelfStream = stream;
    setVideoStream(videoSelf, stream);

    peer.on("call", (call) => {
      call.answer(stream);
      console.log("inside peer on");
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        console.log("inside call");
        setVideoStream(video, userVideoStream);
      });
    });

    socket.on("user-connected", (userId) => {
      setTimeout(() => {
        connectNewUser(userId, stream);
      }, 1000);
      console.log("inside user connected");
    });

    let text = $("input");
    $("html").keydown(function (e) {
      if (e.which == 13 && text.val().length !== 0) {
        socket.emit("message", text.val());
        text.val("");
      }
    });

    socket.on("createMessage", (message) => {
      console.log(text.val());
      $(".messages-reflect-area").append(
        `<li class="message"><b>User</b><br/>${message}</li>`
      );
      scrollingToBottom();
    });
  });

socket.on("user-disconnected", (userId) => {
  if (peers[userId]) peers[userId].close();
});

const leaveMeeting = () => {
  window.close();
};

peer.on("open", (id) => {
  console.log(id);
  socket.emit("join-room", ROOM_ID, id);
});

const connectNewUser = (userId, stream) => {
  console.log(userId);
  console.log(stream);
  const call = peer.call(userId, stream);
  console.log("inside Connect New User");
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    setVideoStream(video, userVideoStream);
    console.log("inside Connect New User - call on ");
  });
  call.on("close", () => {
    video.remove();
    participants = participants - 1;
  });

  peers[userId] = call;
};

const setVideoStream = (video, stream) => {
  video.srcObject = stream;
  console.log("inside Video Stream");
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoFrame.append(video);
  participants = participants + 1;
  console.log(participants);
};

const scrollingToBottom = () => {
  let chat = $(".chat-window");
  chat.scrollTop(chat.prop("scrollHeight"));
};

const muteAndUnmute = () => {
  const enabled = videoSelfStream.getAudioTracks()[0].enabled;
  console.log(videoSelfStream);
  if (enabled) {
    videoSelfStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
    console.log(videoSelfStream);
  } else {
    setMuteButton();
    videoSelfStream.getAudioTracks()[0].enabled = true;
    console.log(videoSelfStream);
  }
};

const setMuteButton = () => {
  const html = `
    <em class="fas fa-microphone"></em>
    <span>Mute</span>
    `;

  document.querySelector(".main_mute").innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `
      <em class="unmute fas fa-microphone-slash"></em>
      <span>Unmute</span>
      `;
  document.querySelector(".main_mute").innerHTML = html;
};

const videoControls = () => {
  console.log();
  const enabled = videoSelfStream.getVideoTracks()[0].enabled;
  console.log(videoSelfStream);
  if (enabled) {
    setVideoButton();
    videoSelfStream.getVideoTracks()[0].enabled = false;
    console.log(videoSelfStream);
  } else {
    setStopVideoButton();
    videoSelfStream.getVideoTracks()[0].enabled = true;
    console.log(videoSelfStream);
  }
};

const setVideoButton = () => {
  const html = `
  <em class="stopVideo fas fa-video-slash"></em>
  <span>Video</span>
      `;

  document.querySelector(".main_video").innerHTML = html;
};

const setStopVideoButton = () => {
  const html = `
  <em class="fas fa-video"></em>
  <span>Stop Video</span>`;
  document.querySelector(".main_video").innerHTML = html;
};

const addemoji = () => {
  let textbox = document.getElementById("chat-message");
  var textboxmessage = textbox.value + "😀";
  textbox.value = textboxmessage;
};

const changeTheme = () => {
  $(".main-video-area").toggleClass("main-video-area-light");
  $(".main-right-area").toggleClass("main-right-area-light");
  $(".main-message-input-area").toggleClass("main-message-input-area-light ");
  $(".navbar").toggleClass("navbar-light");
};

// const timerButton = () =>{ 
//   $("timer").innerHTML = `Date()`;
// }
