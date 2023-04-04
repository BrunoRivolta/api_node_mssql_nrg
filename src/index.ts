import { App } from './app'
import * as dotenv from "dotenv"
dotenv.config()

async function main() {
    const app = new App(3000);
    await app.listen();
}

main();