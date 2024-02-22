const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('game-event', (data) => {
    // Broadcast the event to all connected clients
    io.emit('game-event', data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
socket.on('student-use-skill', (data) => {
    // Handle student skill event
    io.emit('game-event', { eventName: 'use-skill', data });
  });
  
  socket.on('teacher-use-skill', (data) => {
    // Handle teacher skill event
    io.emit('game-event', { eventName: 'use-skill', data });
  });