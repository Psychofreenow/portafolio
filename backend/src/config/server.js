import app from '../app.js';
import { HOST, PORT } from './env.js';
import updateTables from './updateTables.js';

app.listen(PORT, () => {
	console.log(`server active in port: http://${HOST}:${PORT}`);
	updateTables();
});
