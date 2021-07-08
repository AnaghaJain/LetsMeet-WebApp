const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const server = require("http").Server(app);
const io = require("socket.io")(server);

const { ExpressPeerServer } = require("peer");
const peerService = ExpressPeerServer(server, {
  debug: true,
});
app.use("/peerjs", peerService);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

//get room id
app.get("/:rooms", (req, res) => {
  res.render("rooms", { roomId: req.params.rooms });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);
    });
    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

//port local host
server.listen(process.env.PORT || 4100);
