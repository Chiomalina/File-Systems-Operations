// Import fs module
const fs = require("fs").promises;

//Read Content of file
fs.readFile("new-task.txt", "utf-8").then((content) => {
    return fs.appendFile("tasks.txt", content + "\n");
}) .catch((error) => {
    console.log("Error reading file:", error);        
});


