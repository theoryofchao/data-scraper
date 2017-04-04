var express = require('express');
var router = express.Router();

/* get home page. */
router.post('/scrape', (req, res, next) => {
  let request = req.app.get('request');
  let cheerio  = req.app.get('cheerio');
  let url = req.body.url;
  let data = req.body.data;
  request(url, (err, response, html) => {
    if(!err) {
      let $ = cheerio.load(html);
      let resultHtml = $(data).html();
      let resultValue = $(data).text();
      res.json({success: true, html: resultHtml, value: resultValue});
    } else {
      res.json({success: false});
    }
  });
});

module.exports = router;
