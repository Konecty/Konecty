import { MongoClient } from 'mongodb';

let db = null;

const init = async () => {
	try {
		const client = new MongoClient(process.env.MONGO_URL, {
			ignoreUndefined: true,
			useUnifiedTopology: false,
			autoReconnect: true,
			reconnectTries: Infinity,
			native_parser: false,
			poolSize: 10,
		});
		await client.connect();
		db = client.db(process.env.MONGO_DBNAME);
	} catch (error) {
		console.error(`[konecty-database] Error connecting database: ${error.toString()}`);
	}
};

export { init, db };