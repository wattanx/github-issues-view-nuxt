#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const filesize = require('filesize');
const mkdirp = require('mkdirp');

const memoryCache = {};

function getScriptSizes(scriptPaths, buildOutputDir) {
  const res = scriptPaths.reduce(
    (acc, scriptPath) => {
      const [rawSize, gzipSize] = getScriptSize(
        path.join(buildOutputDir, 'dist/client', scriptPath),
      );
      acc.raw += rawSize;
      acc.gzip += gzipSize;
      return acc;
    },
    { raw: 0, gzip: 0 },
  );
  return res;
}

function getScriptSize(scriptPath) {
  const encoding = 'utf8';

  let rawSize, gzipSize;
  if (Object.keys(memoryCache).includes(scriptPath)) {
    rawSize = memoryCache[scriptPath][0];
    gzipSize = memoryCache[scriptPath][1];
  } else {
    const bytes = fs.readFileSync(scriptPath, encoding);
    rawSize = Buffer.byteLength(bytes, encoding);
    gzipSize = zlib.gzipSync(bytes).byteLength;
    memoryCache[scriptPath] = [rawSize, gzipSize];
  }

  return [rawSize, gzipSize];
}

const {
  getBuildOutputDirectory,
  getOptions,
  getStatsFilePath,
} = require('./utils');

const options = getOptions();

const buildOutputDir = path.join(
  process.cwd(),
  getBuildOutputDirectory(options),
);

const statsFile = require(path.join(process.cwd(), getStatsFilePath(options)));

try {
  fs.accessSync(buildOutputDir, fs.constants.R_OK);
} catch (err) {
  console.error(
    `"${buildOutputDir} is not found" - you may not have your working directory set correctly, or not have run "nuxt build".`,
  );
  process.exit(1);
}

const allPageSizes = Object.values(statsFile.namedChunkGroups).reduce(
  (acc, scriptPath, i) => {
    const pagePath = Object.keys(statsFile.namedChunkGroups)[i];
    const scriptSizes = getScriptSizes(scriptPath.assets, buildOutputDir);

    return [...acc, { path: pagePath, size: scriptSizes.gzip }];
  },
  [],
);

const rawData = JSON.stringify(allPageSizes);
mkdirp.sync(path.join(buildOutputDir, 'analyze/'));
fs.writeFileSync(
  path.join(buildOutputDir, 'analyze/__bundle_analysis.json'),
  rawData,
);
