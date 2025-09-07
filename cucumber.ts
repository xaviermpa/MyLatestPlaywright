require('ts-node').register();
module.exports = {
  default: [
    '--require tests/BDD/steps/**/*.ts',
    '--format progress',
    'tests/BDD/features/'
  ]
};
