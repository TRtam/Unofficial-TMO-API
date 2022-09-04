const userAgents = require("user-agents")

const {getBrowser, onlyHTML} = require("../utilities/browser")
const {reader: parse} = require("../utilities/parser")

module.exports = async (req, res) => {
    const href = decodeURI(req.params.href)

    try {
        const page = await (await getBrowser()).newPage()

        await page.setUserAgent(userAgents.toString())

        await onlyHTML(page)

        await page.goto(href, {
            waitUntil: "domcontentloaded"
        })

        await page.goto(page.url().replace("/paginated", "/cascade"), {
            waitUntil: "domcontentloaded"
        })

        const html = await (await page.waitForSelector("#app > section:nth-child(2) > div > div")).evaluate(element => element.innerHTML)
                     + await (await page.waitForSelector("#main-container")).evaluate(element => element.innerHTML)

        await page.close()

        return res.status(200).json({...parse(html), referer: page.url()})
    }
    catch(error) {
        console.log("controllers/library", error); return res.status(500).send("something went wrong")
    }
}