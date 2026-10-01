import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Só a pasta dist do projeto é removida e recriada.
const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await build({ absWorkingDir: root, entryPoints: ['js/app.js'], outfile: 'dist/js/app.min.js',
  bundle: true, minify: true, format: 'esm', target: ['es2020'], legalComments: 'eof' });
await build({ absWorkingDir: root, entryPoints: ['css/estilos.css'], outfile: 'dist/css/estilos.min.css',
  minify: true, legalComments: 'eof' });
let html = await readFile(path.join(root, 'index.html'), 'utf8');
html = html.replace('css/estilos.css', 'css/estilos.min.css').replace('js/app.js', 'js/app.min.js');
await writeFile(path.join(dist, 'index.html'), html);
for (const file of ['cadastro.html', 'projetos.html']) await cp(path.join(root, file), path.join(dist, file));
for (const directory of ['imagens', 'licenses', 'js/vendor'])
  await cp(path.join(root, directory), path.join(dist, directory), { recursive: true });
await writeFile(path.join(dist, '.nojekyll'), '');
console.log('Build concluído: dist/ (JavaScript agrupado, JS e CSS minificados).');
