require('http')
  .Server((req, res) => {
    const url = require('url');
    const CORS = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
    };
    res.writeHead(200, CORS);
    const day = new Date().getDate();
    const uri = url.parse(req.url, true);
    if (req.url === '/day') return res.end(String(day));
    if (req.url === '/v8') return res.end(process.versions.v8);
    if (req.url === '/node') return res.end(process.versions.node);
    if (req.url === '/package.json') return require('fs').createReadStream('./package.json').pipe(res);
    if (uri.pathname === '/mirror' && 'x' in uri.query) {
      return res.end(uri.query.x)
    }
    if (req.url === '/login') return res.end('EvgeniyKapitonov');
    res.end('EvgeniyKapitonov');
  })
  .listen(process.env.PORT);
