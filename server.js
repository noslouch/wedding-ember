/* eslint-env node */
const FastBootAppServer = require('fastboot-app-server');
 
let server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true, // Optional - Enables gzip compression.
  host: '0.0.0.0', // Optional - Sets the host the server listens on.
  port: 8001, // Optional - Sets the port the server listens on (defaults to the PORT env var or 3000).
  // sandboxGlobals: { GLOBAL_VALUE: MY_GLOBAL } // Optional - Make values available to the Ember app running in the FastBoot server, e.g. "MY_GLOBAL" will be available as "GLOBAL_VALUE"
});
 
server.start();
