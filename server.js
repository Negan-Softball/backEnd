const express = require('express');
const helmet = require('helmet');
const welcomeRouter = require('./welcome/welcomeRouter');
const playerRouter = require('./players/playerRouter');

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());
server.use('/', welcomeRouter);
server.use('/players', playerRouter);

server.use((err, req, res, next) => {
   console.log(err);
   res.status(500).json({
      message: 'Server error, please try again later.'
   });
});

server.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`)
});
