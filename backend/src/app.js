const config = require('../config');
const app = require('./server');

app.listen(config.port, err => {
  if (err) {
    process.exit(1);
  }
});

console.log(`******* API server is running on port: ${process.env.PORT} *******`);