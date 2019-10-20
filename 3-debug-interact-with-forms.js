const puppeteer = require('puppeteer');

(async () => {
	const devtools = {headless: false, devtools: true}; // headless allows us to watch what the headless browser is doing
																											// devtools gives us access to chrome dev tools within the context of the browser session
	const browser = await puppeteer.launch(devtools);

	const page = await browser.newPage();
	await page.goto('https://news.ycombinator.com');

	const topTitle = await page.evaluate(() => {
		return document.querySelector('#hnmain table .title a').innerText;
	});
	console.log(topTitle);


	const $input = await page.$('input');
	await $input.type('dogs');
	await Promise.all([
		$input.press('Enter'),
		page.waitForNavigation({waitUntil: 'networkidle0'})
	]);


	const topSearchTitle = await page.evaluate(() => {
		// debugger;
		return document.querySelector('#hnmain table .title a').innerText;
		// return document.querySelector('.SearchResults .Story .Story_title a').innerText;
	});

	console.log(topSearchTitle);


	process.exit();
})();
