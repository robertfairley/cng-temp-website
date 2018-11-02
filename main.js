const {
  existsSync,
  mkdirSync,
} = require("fs");
const { Server } = require("./lib");
const { Log } = require("./lib/log");
const {
  HOSTNAME,
  PORT,
} = require("./lib/constants");

Log.write("Starting server...");

serverSetup();

Server.listen(
  PORT,
  HOSTNAME,
  err => {
    if (err) {
      console.error(err);
      return process.exit(-1);
    }

    Log.write(`Server started. Listening on port ${HOSTNAME}:${PORT}`);
  }
);

/********************** Utility */

function serverSetup() {
  const logsDirName = `${process.cwd()}/logs`;

  try {
    if (!existsSync(logsDirName))
      mkdirSync(logsDirName);
  } catch(err) {
    console.error(err);
    return process.exit(-1);
  }
}