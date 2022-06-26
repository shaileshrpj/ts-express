import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/../../.env' });

export const db: any = () => {
    return {
        port: process.env['PORT'] ?? '8000',
        mongoUrl: process.env['MONGO_URL'] ?? 'mongodb://localhost:27017',
        mongoDbName: process.env['MONGO_DB_NAME'] ?? 'test',
    }
};
