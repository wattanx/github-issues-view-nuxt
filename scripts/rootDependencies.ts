import {
  cruise,
  IReporterOutput,
  ICruiseResult,
  IDependency,
} from 'dependency-cruiser';
import { join } from 'path';
import fs from 'fs';

type Falsy = false | 0 | '' | null | undefined;

const outputDir = join(process.cwd(), '.nuxt/module_graph/');
const outputFilePath = join(outputDir, `output.txt`);

const cruiseResult: IReporterOutput = cruise([
  'components',
  'pages',
  'framework',
]);

const modules = (<ICruiseResult>cruiseResult.output).modules;

const moduleDepsMap: { [key: string]: IDependency[] } = Object.fromEntries(
  getModuleMap(),
);

const [, , ...targetedFiles] = process.argv;
const res: string[] = [];
targetedFiles.forEach((filePath) => {
  const path = join(process.cwd(), filePath);
  walk(path, [], res);
});
console.log(res);
const pages = res.filter((x) => x.startsWith('pages'));
const components = res.filter((x) => x.startsWith('components'));
const others = res.filter(
  (x) => !x.startsWith('pages') || !x.startsWith('components'),
);

const pagesStr = pages.map((path) => `- ${path}`).join('\n');
const componentStr = components.map((path) => `- ${path}`).join('\n');
const othersStr = others.map((path) => `- ${path}`).join('\n');

const output = `
<!-- __MODULE_GRAPH -->
## Module Graph
### Pages affected by this PR
${pagesStr}

### Components affected by this PR
${componentStr}
`;

try {
  fs.mkdirSync(outputDir);
} catch (err) {
  // may already exist
}

fs.writeFileSync(outputFilePath, output);

function walk(path: string, visitedNodes: string[], res: string[]) {
  const deps = Object.entries(moduleDepsMap).filter(([, d]) => {
    return d.find(({ module }) => module === path);
  });

  if (deps.length !== 0) {
    for (const [key] of deps) {
      visitedNodes.push(path);
      walk(key, visitedNodes, res);
    }
  } else if (!res.includes(path)) {
    res.push(path);
  }
}

function formatPath(path: string) {
  path = path.replace('~/', '');
  path = path.replace('@/', '');
  return path;
}

function getModuleMap() {
  return modules
    .map(({ source, dependencies }) => {
      if (source.includes('node_modules') || source.match(/.spec/)) {
        return false;
      }

      const deps = dependencies.filter(({ dependencyTypes }) => {
        return !(
          dependencyTypes.includes('npm') ||
          dependencyTypes.includes('npm-no-pkg')
        );
      });

      const value = deps.map(({ module, ...rest }) => {
        const absPath = formatPath(join(process.cwd(), module));

        return { ...rest, module: absPath };
      });

      return [source, value];
    })
    .filter(<T>(x: T | Falsy): x is T => !!x); // falsyを除外
}
