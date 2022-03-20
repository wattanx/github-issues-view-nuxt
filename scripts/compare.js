#!/usr/bin/env node

const filesize = require('filesize');
const fs = require('fs');
const path = require('path');
const { getBuildOutputDirectory, getOptions } = require('./utils');

const options = getOptions();

const buildOutputDir = path.join(
  process.cwd(),
  getBuildOutputDirectory(options),
);

const outdir = path.join(buildOutputDir, 'analyze');
const outfile = path.join(outdir, '__bundle_analysis_comment');

const currentBundle = require(path.join(
  buildOutputDir,
  'analyze/__bundle_analysis.json',
));

const baseBundle = require(path.join(
  buildOutputDir,
  'analyze/base/bundle/__bundle_analysis.json',
));

const removedSizes = baseBundle
  .filter(({ path }) => !currentBundle.find((x) => x.path === path))
  .map(({ path }) => `| \`${path}\` | removed |`);

const sizes = currentBundle
  .map(({ path, size }) => {
    const basefile = baseBundle.find((x) => x.path === path);
    const diff = basefile ? filesize(size - basefile.size) : 'added';
    return `| \`${path}\` | ${filesize(size)} (${diff}) |`;
  })
  .concat(removedSizes)
  .join('\n');

const output = `# Bundle Size
| Route | Size (gzipped) |
| --- | --- |
${sizes}`;

try {
  fs.mkdirSync(outdir);
} catch (e) {
  // may already exist
}

fs.writeFileSync(outfile, output);
