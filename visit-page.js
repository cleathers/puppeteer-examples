const puppeteer = require('puppeteer');

(async () => {
	// launch the browser
	const browser = await puppeteer.launch();

	// create a new page object, we could maybe think of this as being analogus to opening up a new tab in your browser
	const page = await browser.newPage();

	// tell the page what webpage to visit
	await page.goto('https://news.ycombinator.com');

	// #evaluate allows you to run javascript within the context of that browser session. This allows you to query the page as the browser sees the page at that time
	const val = await page.evaluate(() => {
		return document.querySelector('title').innerHTML;
	});

	console.log(val);
	process.exit();
})();
