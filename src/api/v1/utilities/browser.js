const puppeteer = require("puppeteer-extra")

puppeteer.use(require("puppeteer-extra-plugin-stealth")())
puppeteer.use(require("puppeteer-extra-plugin-adblocker")({blockTrackers: true}))

let browser

module.exports = {
    getBrowser: async () => {
        if(!browser) {
            browser = await puppeteer.launch({
                args: [
                    "--no-sandbox",
                ]
            })
        }
    
        return browser
    },

    onlyHTML: async page => {
        await page.setRequestInterception(true)
    
        page.on("request", req => {
            if(!["document", "xhr", "fetch", "script"].includes(req.resourceType())) {
                return req.abort()
            }
    
            return req.continue()
        })
    }
}