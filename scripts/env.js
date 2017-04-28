import fs from 'fs';
import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  env: nodeEnv,
  api: {
    url: nodeEnv === 'production' ? 'https://uatcentrum.mybluemix.net/api/' : 'https://devcentrum.mybluemix.net/api/',
  }
};

fs.writeFile(
  path.resolve(
    path.join('src', 'env.js')
  ),
  `export default ${JSON.stringify(env, null, 2)}`,
  err => {
    if (err) {
      console.log(err);
    }
  }
);
