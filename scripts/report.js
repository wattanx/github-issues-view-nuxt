#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const filesize = require('filesize');
const mkdirp = require('mkdirp');
const bundle = require('../.nuxt/stats/client.json');
const { getBuildOutputDirectory, getOptions } = require('./utils');

const options = getOptions();
const buildOutputDir = path.join(
  process.cwd(),
  getBuildOutputDirectory(options),
);

try {
  fs.accessSync(buildOutputDir, fs.constants.R_OK);
} catch (err) {
  console.error(
    `"${buildOutputDir} is not found" - you may not have your working directory set correctly, or not have run "nuxt build".`,
  );
  process.exit(1);
}

const allPageSizes = Object.entries(bundle.assetsByChunkName).map(
  ([key, value]) => {
    const bytes = fs.readFileSync(
      path.join(buildOutputDir, 'dist/client', value),
    );
    const gzipped = zlib.gzipSync(bytes).byteLength;

    return { path: key, size: gzipped };
  },
);

const rawData = JSON.stringify(allPageSizes);
mkdirp.sync(path.join(buildOutputDir, 'analyze/'));
fs.writeFileSync(
  path.join(buildOutputDir, 'analyze/__bundle_analysis.json'),
  rawData,
);
