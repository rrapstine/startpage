const iCloud = require("apple-icloud");

const username = import.meta.env.VITE_APPLE_ID;
const password = import.meta.env.VITE_APPLE_PASSWORD;
const session = {};

const myCloud = new iCloud(session, username, password);

myCloud.on("ready", () => {
  // Check if 2FA is required
  if (myCloud.twoFactorAuthenticationIsRequired) {
    // Prompt the user for their 2FA code
    const code = prompt("Enter your 2FA code");
    myCloud.securityCode = code;
  }

  // Get all reminders
  const tasks = async () => {
    console.log(tasks);
    return await myCloud.Reminders.getOpenTasks();
  };

  return tasks;
});

export default myCloud;
