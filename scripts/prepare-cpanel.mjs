import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const standaloneDir = path.join(rootDir, ".next", "standalone");
const staticSourceDir = path.join(rootDir, ".next", "static");
const publicSourceDir = path.join(rootDir, "public");
const runtimeDir = path.join(rootDir, "cpanel-runtime");

function removeDirIfExists(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

function copyRecursive(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) {
    return;
  }

  fs.mkdirSync(targetDir, { recursive: true });

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

if (!fs.existsSync(standaloneDir)) {
  throw new Error("Standalone build not found. Run `next build` before preparing cPanel output.");
}

removeDirIfExists(runtimeDir);
copyRecursive(standaloneDir, runtimeDir);
copyRecursive(staticSourceDir, path.join(runtimeDir, ".next", "static"));
copyRecursive(publicSourceDir, path.join(runtimeDir, "public"));

// Copy static assets to _next/static/ so Apache can serve them directly
// without proxying through Node.js/Passenger (same as kids.techmodulus.com setup)
copyRecursive(staticSourceDir, path.join(runtimeDir, "_next", "static"));

// Write a clean minimal package.json so cPanel/Passenger runs `node server.js`
// regardless of whether it reads npm scripts or uses the startup file setting.
const runtimePackageJson = {
  name: "techmodulus-portal",
  version: "1.0.0",
  private: true,
  scripts: {
    start: "node server.js",
  },
};
fs.writeFileSync(
  path.join(runtimeDir, "package.json"),
  JSON.stringify(runtimePackageJson, null, 2) + "\n",
  "utf8"
);

console.log(`Prepared upload-ready runtime at ${runtimeDir}`);