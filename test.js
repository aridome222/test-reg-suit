const playwright = require("playwright");

(async () => {
	for (const browserType of ["chromium", "firefox", "webkit"]) {
		const browser = await playwright[browserType].launch({ headless: true });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto("http://localhost:5000/ari_eval_af", {
			waitUntil: "networkidle",
		});

		// ページ全体のサイズを取得（Seleniumの execute_script と同じ）
		const { width, height } = await page.evaluate(() => {
			return {
				width: document.body.scrollWidth,
				height: document.body.scrollHeight,
			};
		});

		console.log(`${browserType} → width:${width}, height:${height}`);

		// ビューポートサイズをページ全体に合わせる
		await page.setViewportSize({ width, height });

		// ページが安定するまで待機（Seleniumの sleep や DOM安定待ち相当）
		await page.waitForTimeout(3000);

		// スクリーンショット撮影（画面に見える範囲）
		await page.screenshot({
			path: `directory_contains_actual_images/example-${browserType}.png`,
			fullPage: false, // ページ全体ではなく表示範囲を撮影
		});

		await browser.close();
	}
})();
