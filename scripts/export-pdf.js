const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, '..', 'index.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'resume.pdf',
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.6in', bottom: '0.6in', left: '0.65in', right: '0.65in' },
  });

  await browser.close();
  console.log('PDF exported to resume.pdf');
})();
