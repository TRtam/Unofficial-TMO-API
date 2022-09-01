const userAgents = require("user-agents")

const {getBrowser, onlyHTML} = require("../utilities/browser")
const {library: parse} = require("../utilities/parser")

module.exports = async (req, res) => {
    const href = decodeURI(req.params.href)

    try {
        const page = await (await getBrowser()).newPage()

        await page.setUserAgent(userAgents.toString())

        await onlyHTML(page)

        await page.goto(href, {
            waitUntil: "domcontentloaded"
        })

        const book = await (await page.waitForSelector("#app > section > header > section.element-header-content > div.container.h-100 > div > div.col-12.col-md-3.text-center")).evaluate(element => element.innerHTML)
                     + await (await page.waitForSelector("#app > section > header > section.element-header-content > div.container.h-100 > div > div.col-12.col-md-9.element-header-content-text")).evaluate(element => element.innerHTML)
                     + await (await page.waitForSelector("#chapters > ul")).evaluate(element => element.innerHTML)

        await page.close()

        return res.status(200).json(parse(book))
    }
    catch(error) {
        console.log("controllers/library", error); return res.status(500).send("something went wrong")
    }
}