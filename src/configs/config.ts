import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/../../.env' });

export const config: any = () => {
    return {
        port: process.env['PORT'] ?? '8000'
    }
};
