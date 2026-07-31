// hash-password.js
// Run once to generate ADMIN_PASSWORD_HASH for your .env file:
//   node hash-password.js "your chosen password"
// The plain password is never stored anywhere; only the hash goes in .env.

const bcrypt = require("bcryptjs");

const password = process.argv[2];
if (!password) {
  console.error('Usage: node hash-password.js "your chosen password"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);
console.log("\nAdd this line to your .env file:\n");
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
