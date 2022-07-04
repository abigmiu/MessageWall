import prod from './prod';
import dev from './dev';

const config = {
  dev,
  prod,
};

const env = process.env.NODE_ENV;
export default () => config[env];
