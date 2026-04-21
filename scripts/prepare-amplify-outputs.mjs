import { copyFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
const projectRoot = path.resolve(currentDir, "..");
const sourcePath = path.join(projectRoot, "amplify_outputs.json");
const targetPath = path.join(projectRoot, "public", "amplify_outputs.json");

try {
  await copyFile(sourcePath, targetPath);
  console.log("Copied amplify_outputs.json into public/ for the frontend build.");
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    await rm(targetPath, { force: true });
    console.log("No amplify_outputs.json found. Continuing without Amplify runtime outputs.");
  } else {
    throw error;
  }
}
