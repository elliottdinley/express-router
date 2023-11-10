const app = require('./src/app');
const port = 3000;
const syncSeed = require('./seed');

syncSeed();

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}/`)
});