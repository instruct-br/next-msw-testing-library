import { loadEnvConfig } from "@next/env";

export async function setup() {
  // Load .env.test values as environment variables
  // See: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#test-environment-variables
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
}
