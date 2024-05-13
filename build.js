const fs = require("fs-extra");
const { execSync } = require("child_process");

// Function to create a dist folder
function createDistFolder() {
  try {
    fs.mkdirSync("dist");
    console.log("Created dist folder.");
  } catch (err) {
    if (err.code !== "EEXIST") {
      console.error("Error creating dist folder:", err);
    }
  }
}

// Function to copy folder to dist folder
function copyFolderToDist() {
  const foldersToCopy = ["public"]; // Folders to copy
  foldersToCopy.forEach((folder) => {
    try {
      fs.copySync(folder, `dist/${folder}`);
      console.log(`Copied ${folder} to dist folder.`);
    } catch (err) {
      console.error(`Error copying ${folder} to dist folder:`, err);
    }
  });
}

// Function to copy files to dist folder
function copyFilesToDist() {
  // Files to copy
  const filesToCopy = ["log.json", ".env"];

  filesToCopy.forEach((file) => {
    try {
      fs.copySync(file, `dist/${file}`);
      console.log(`Copied ${file} to dist folder.`);
    } catch (err) {
      console.error(`Error copying ${file} to dist folder:`, err);
    }
  });
}

// Function to build the Go application
function buildGoApp() {
  try {
    //check if is windows
    execSync("go build -o dist/app cmd/main.go", { stdio: "inherit" });
    console.log("Built Go application.");
  } catch (err) {
    console.error("Error building Go application:", err);
  }
}

// Main function
function main() {
  createDistFolder();
  copyFilesToDist();
  copyFolderToDist();
  buildGoApp();
}

// Run the main function
main();
