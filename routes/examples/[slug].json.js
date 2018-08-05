import fs from 'fs';

function cleanMain (example) {
  return example.split('export')[1]
    .replace(/(}\n}\n<\/script>| default.*|oncreate.*|^\s{2})/gm, '')
    .replace(/\t/g, '  ')
    .trim();
}

function getComponentPaths (example) {
  return example.match(/\.\.\/.+html/gm)
    .map(d => d.replace('../', ''))
}

export function get(req, res, next) {
  const { slug } = req.params;

  const examplePath = `components/examples/${slug}.html`;

  if (!fs.existsSync(examplePath)) {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found: ${slug}`
    }));
    return;
  }

  const example = fs.readFileSync(examplePath, 'utf-8');
  const main = { 
    title: 'main.js', 
    contents: cleanMain(example) 
  };

  const components = getComponentPaths(example)
    .map(d => {
      return {
        title: d,
        contents: fs.readFileSync(`components/${d}`, 'utf-8').replace(/\t/g, '  ').trim()
      }
    });

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({ pages: [main].concat(components) }));
}