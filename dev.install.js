/* eslint-disable no-console */

const fs = require('fs');
const { resolve } = require('path');
const { join } = require('path');
const cp = require('child_process');
const os = require('os');

const lib = resolve(__dirname, './src/');

const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

cp.spawn(npmCmd, ['i'], { env: process.env, cwd: __dirname, stdio: 'inherit' });

fs.readdirSync(lib)
  .forEach((mod) => {
    const modPath = join(lib, mod);
    if (!fs.existsSync(join(modPath, 'package.json'))) return;
    cp.spawn(npmCmd, ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' });
  });
