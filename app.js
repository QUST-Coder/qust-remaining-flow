var superagent = require('superagent');
var cheerio = require('cheerio');

superagent.get('http://172.16.10.3')
          .end(function (err, res) {
              var $ = cheerio.load(res.text);
              var used_flux = $("script").text();
              var start = used_flux.indexOf("flow='") + 6;
              var end = start + 7;
              used_flux = parseInt(used_flux.slice(start, end))/1024;
              remaining = parseInt(1024 * 8 -used_flux);
              console.log(remaining + ' Mb');
    });
