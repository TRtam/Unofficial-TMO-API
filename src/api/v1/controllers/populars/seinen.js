const userAgents = require("user-agents")

const {getBrowser, onlyHTML} = require("../../utilities/browser")
const {populars: parse} = require("../../utilities/parser")

module.exports = async (_, res) => {
    const url = "https://lectortmo.com/populars-boys"
    
    try {
        const page = await (await getBrowser()).newPage()

        await page.setUserAgent(userAgents.toString())

        await onlyHTML(page)

        await page.goto(url, {
            waitUntil: "domcontentloaded"
        })

        const populars = await (await page.waitForSelector("#app > main > div:nth-child(2) > div.col-12.col-lg-8.col-xl-9 > div:nth-child(1)")).evaluate(element => element.innerHTML)

        await page.close()

        return res.status(200).json(parse(populars))
    }
    catch(error) {
        console.error("controllers/populars/seinen", error); return res.status(500).send("something went wrong")
    }
}