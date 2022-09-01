const userAgents = require("user-agents")

const {getBrowser, onlyHTML} = require("../../utilities/browser")
const {trending: parse} = require("../../utilities/parser")

module.exports = async (req, res) => {
    const url = "https://lectortmo.com"
    
    try {
        const page = await (await getBrowser()).newPage()

        await page.setUserAgent(userAgents.toString())

        await onlyHTML(page)

        await page.goto(url, {
            waitUntil: "domcontentloaded"
        })

        const trending = await (await page.waitForSelector("#pills-trending-girls > div")).evaluate(element => element.innerHTML)

        await page.close()

        return res.status(200).json(parse(trending))
    }
    catch(error) {
        console.error("controllers/trending/josei", error); return res.status(500).send("something went wrong")
    }
}