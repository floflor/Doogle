
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port,host, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

 
});
