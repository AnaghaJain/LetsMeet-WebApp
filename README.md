# Lets Meet WebApp

I have created a video conferencing web app using WebRTC technology which uses socket io. 
Tech stack involved - HTML, CSS, JavaScript, Node JS, WebRTC technology (socket io library)

To view the deployed version of my web app:
https://nameless-citadel-15479.herokuapp.com/

User guide:
https://www.youtube.com/watch?v=mYLrhY36H0w

# Features
LetsMeet Features

Rooms

On joining the app, we are allotted a random room using uuidv4. It provides a random room number which is attached to the URL. It is important in a web app as it defines the room in which the other members would be able to join. It creates a unique URL ID for conducting a meet.

Start and Stop Video

On joining the app, our video and audio is disabled and even the control buttons are disabled. It is because the meet hasn’t started yet. To enter the video conference, you will have to click the start meet button and then play around with the audio-video controls as per your need.

Meanwhile, the chat is working and allows you to chat with all the users in the room, irrespective of you have started the meeting or not.
Once you click on start meeting, the option is replaced by stop the meet. Stop the meet disable the video and audio of the user and then disables the control buttons like it is in the beginning.

This feature gives the user the freedom to toggle around the meet while staying connected with friends and family via chat.
 
Video
The video is accessed by the app to access the video. The app asks you to grant the access for video and microphone access for video conferencing app experience.
The video is in tile format which uses the peer connection. The device medias are being used and we are able to view our video on joining the room.

When a new user gets added, a tile is added to main video area. This app can accommodate 6 users easily. The video has been styled in this manner to obtain the mirror formatted video. This makes video experience better as well realistic. 

The video can be switched off and on, using the video button. This is a beneficial and a necessary feature added to make this like a video conferencing app.

Features:

•	Video on and Video off button

•	When video is switched off – it turns red and the script reads – video 

•	On clicking again, the microphone is given access – comes back to the original state.

•	All users are accessible to this feature if the meet has started.

•	If the meet has not started it remains disabled.

•	Tile format videos on the main video area

•	It is scalable and can accommodate multiple users.

•	You can view all users using the scroll feature.

•	Scroll bar is stylish.

•	Mirror formatted video for real-life view

Mute

The audio is accessed by the app to access your microphone. When a connection is made with the peer the socket is emitted and we are able to hear the user’s audio.
The mute button is on the bottom left corner with the video button. It is a toggle button to mute and unmute as per the user’s convenience.

Features:

•	Mute and unmute button

•	When audio mute – it turns red and the script reads – unmute

•	On clicking again, the microphone is given access – comes back to the original state.

•	All users are accessible to this feature if the meet has started.

•	If the meet has not started it remains disabled.

Chat Window

The chat window is on the right-hand side of the web app. It has a message area, message input area and an emoji handler.

Features:

•	The user can add messages before the peer connection is established. 

•	The user can live chat anytime, may it be before the meet starts, during the meet or after the meet.

•	All chats are accessible to the users joined in the room – at all times.

•	The user can also continue chatting after the users leave.

•	The emoji handler allows you to add the emoji on the chat box.

•	You can use the enter button to send the message.

•	The messages are styled so that the messages scroll once it surpasses the window allotted space.

•	It has a stylish scroll bar.

•	The scroll is formatted so that you view the newest messages (the last messages are viewed due to auto scroll)

Emoji

The emoji is a fun element added to the chat window. It is a small icon which on clicking copies the emoji on the textbox. 
This is also sent to the chat window using the enter button. 

Copy URL/Share Link

To invite more member, you would require to send the entire URL to your friend using which he/she can join.
The copy URL allows the user to copy the URL on the clipboard at the click of the button.

Themes Change

Theme button is a very unique feature which allows you to explore a new theme on clicking.
It is a toggle button which allows the user a eye soothing themes – either a light theme inducing a calming effect, and the default theme – which is the dark theme – which gives it a more professional, eye-soothing visual.

Leave/Disconnect Users

The disconnect feature of the Video conferencing app is activated. When a user closes the tab to disconnect, the user is removed from the screen from other’s screen as well. Without this feature you get the frozen screen of the left user on the screen. 

This is an important feature to establish proper connection between users. It is part of the necessary condition to establish a non-lagged connection.

Participants

Video conferencing app is scalable and can be used together by multiple users. The scroll bar allows you to navigate and view all videos. 
