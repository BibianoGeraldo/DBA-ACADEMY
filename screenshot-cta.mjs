import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 60 });
await page.goto('http://localhost:3000');
await page.waitForSelector('.announcement-bar', { timeout: 10000 });
await page.waitForTimeout(1000);

const styles = await page.evaluate(() => {
  const inner = document.querySelector('.announcement-inner');
  const cta = document.querySelector('.announcement-cta');
  const cs1 = window.getComputedStyle(inner);
  const cs2 = window.getComputedStyle(cta);
  return {
    innerJustify: cs1.justifyContent,
    ctaMarginLeft: cs2.marginLeft,
  };
});
console.log('Computed:', styles);

const bar = await page.$('.announcement-bar');
await bar.screenshot({ path: path.join(__dirname, 'cta-preview.png') });
await browser.close();
