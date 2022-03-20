const path = require('path');

/**
 * Reads options from `package.json`
 */
const getOptions = (pathPrefix = process.cwd()) => {
  return require(path.join(pathPrefix, 'package.json')).nuxtBundleAnalysis;
};

/**
 * Gets the output build directory, defaults to `.next`
 *
 * @param {object} options the options parsed from package.json.nextBundleAnalysis using `getOptions`
 * @returns {string}
 */
const getBuildOutputDirectory = (options) => {
  return options.buildOutputDirectory || '.nuxt';
};

module.exports = {
  getOptions,
  getBuildOutputDirectory,
};
