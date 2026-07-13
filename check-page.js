const http = require('http');
http.get('http://localhost:3002', (res) => {
  console.log('HTTP', res.statusCode);
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    if (res.statusCode === 200) {
      const t = body.match(/<title>(.*?)<\/title>/);
      console.log('title:', t ? t[1] : 'none');
      console.log('SUCCESS - page loaded correctly');
    } else {
      console.log('ERROR page, checking...');
      const idx = body.indexOf('"err"');
      if (idx !== -1) console.log(body.substring(idx, idx + 400));
      else console.log(body.substring(0, 500));
    }
  });
}).on('error', e => console.log('Connection error:', e.message));