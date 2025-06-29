import * as dotenv from "dotenv";

export default async function globalSetup() {
  const envFile = process.env.ENV_FILE || ".env";
  console.log(`[setup] Loading env file: ${envFile}`);
  dotenv.config({ path: envFile });
  console.log(`[setup] ADMIN_USER loaded: ${process.env.ADMIN_USER}`);
}
