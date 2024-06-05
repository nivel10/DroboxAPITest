import express from 'express';
import routerDropbox from './routes/dropbox'

const app = express();
app.use(express.json());
const appPort = 3000;

app.use('/api/v1/dropbox', routerDropbox);

app.listen(appPort, () => {
    console?.log(`Server running on port: ${appPort}`);
});