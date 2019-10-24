const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();

	const page = await browser.newPage();
	await page.goto('https://abc.com', {waitUntil: 'networkidle2'});

  await page.screenshot({path: 'pageshot.png'});

  const el = await page.$('nav.navigation');
  await el.screenshot({path: 'example.png'});





	process.exit();
})();
