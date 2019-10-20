const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://news.ycombinator.com');

	const topTitle = await page.evaluate(() => {
		return document.querySelector('#hnmain table .title a').innerHTML;
	});
	console.log(topTitle);


	const $input = await page.$('input');
	await $input.type('dogs');
	await $input.press('Enter');

	// on submit of a form on hacker news, the page reloads so we have tell the browser to wait for the page to finish loading before evaluting contents
	await page.waitForNavigation();

	const topSearchTitle = await page.evaluate(() => {
		return document.querySelector('#hnmain table .title a').innerHTML;
	});
	console.log(topSearchTitle);


	process.exit();
})();
