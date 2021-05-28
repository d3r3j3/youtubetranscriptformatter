const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);    

    const [el] = await page.$x('//*[@id="gb4hbqddw1"]/div/div/div[2]/div/div/div/p[1]/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log("Hello World");
    console.log({rawTxt});

    browser.close();
}

scrapeProduct('//*[@id="gb4hbqddw1"]/div/div/div[2]/div/div/div/p[1]/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span/span');
