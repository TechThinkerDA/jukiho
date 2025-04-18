const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Initialize Socket.io
  const io = new Server(server, {
    path: '/api/socketio',
    addTrailingSlash: false,
  });

  // Make the server available globally
  global.server = server;

  // Handle socket connections
  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Handle joining a specific canvas room
    socket.on('join-canvas', (canvasId) => {
      console.log(`Client ${socket.id} joined canvas: ${canvasId}`);
      socket.join(canvasId);

      // Notify others in the room that a new user has joined
      socket.to(canvasId).emit('user-joined', { id: socket.id });
    });

    // Handle drawing events
    socket.on('draw-line', (data) => {
      const { canvasId, line } = data;
      // Broadcast the drawing to all clients in the same canvas room except the sender
      socket.to(canvasId).emit('draw-line', line);
    });

    // Handle adding elements (like sticky notes)
    socket.on('add-element', (data) => {
      const { canvasId, element } = data;
      socket.to(canvasId).emit('add-element', element);
    });

    // Handle moving elements
    socket.on('move-element', (data) => {
      const { canvasId, elementId, position } = data;
      socket.to(canvasId).emit('move-element', { elementId, position });
    });

    // Handle updating element content
    socket.on('update-element', (data) => {
      const { canvasId, elementId, content } = data;
      socket.to(canvasId).emit('update-element', { elementId, content });
    });

    // Handle deleting elements
    socket.on('delete-element', (data) => {
      const { canvasId, elementId } = data;
      socket.to(canvasId).emit('delete-element', elementId);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
      // Notify all rooms this client was in that they've left
      io.emit('user-left', { id: socket.id });
    });
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
