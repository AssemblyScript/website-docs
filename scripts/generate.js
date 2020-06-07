const targetUrl = "https://www.assemblyscript.org/"

const redirects = {
  'index': '',
  'quick-start': 'quick-start.html',
  'basics': 'basics.html',
  'basics/types': 'types.html',
  'basics/environment': 'environment.html',
  'basics/exports-and-imports': 'exports-and-imports.html',
  'basics/loader': 'loader.html',
  'details': 'compiler.html',
  'details/compiler': 'compiler.html',
  'details/memory': 'memory.html',
  'details/runtime': 'runtime.html',
  'details/peculiarities': 'peculiarities.html',
  'details/portability': 'portability.html',
  'details/debugging': 'debugging.html',
  'details/interoperability': 'interoperability.html',
  'details/development': 'development.html',
  'details/transforms': 'transforms.html',
  'faq': 'basics.html#frequently-asked-questions',
  'standard-library': 'stdlib/globals.html',
  'standard-library/globals': 'stdlib/globals.html',
  'standard-library/array': 'stdlib/array.html',
  'standard-library/arraybuffer': 'stdlib/arraybuffer.html',
  'standard-library/dataview': 'stdlib/dataview.html',
  'standard-library/date': 'stdlib/date.html',
  'standard-library/error': 'stdlib/error.html',
  'standard-library/map': 'stdlib/map.html',
  'standard-library/math': 'stdlib/math.html',
  'standard-library/number': 'stdlib/number.html',
  'standard-library/set': 'stdlib/set.html',
  'standard-library/string': 'stdlib/string.html',
  'standard-library/typedarray': 'stdlib/typedarray.html',
  'extended-library/staticarray': 'stdlib/staticarray.html',
  'built-with-assemblyscript': 'built-with-assemblyscript.html',
}

const template = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Redirecting to %URL%</title>
    <link rel="canonical" href="%URL%" />
    <meta http-equiv="refresh" content="0; URL=%URL%" />
  </head>
  <body>
    <h1>This page has moved</h1>
    <p>If you are not being redirected, <a href="%URL%">click here</a>.</p>
  </body>
</html>
`

const fs = require('fs')
const path = require('path')
const basedir = path.join(__dirname, '..', 'docs')

for (let [from, to] of Object.entries(redirects)) {
  const file = path.join(basedir, from + '.html')
  const html = template.replace(/%URL%/g, targetUrl + to)
  let dir = path.dirname(file)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync(file, html)
}
