const userAgents = require("user-agents")

const {getBrowser, onlyHTML} = require("../utilities/browser")
const {latestUploaded: parse} = require("../utilities/parser")

module.exports = async (req, res) => {
    const {query: {page}} = req

    const url = `https://lectortmo.com/latest_uploads?uploads_mode=thumbnail${page ? `&page=${page}` : ""}`
    
    try {
        const page = await (await getBrowser()).newPage()

        await page.setUserAgent(userAgents.toString())

        await onlyHTML(page)

        await page.goto(url, {
            waitUntil: "domcontentloaded"
        })

        const latestUploaded = await (await page.waitForSelector("#app > main > div:nth-child(2) > div.col-12.col-lg-8.col-xl-9 > div:nth-child(2)")).evaluate(element => element.innerHTML)

        await page.close()

        return res.status(200).json(parse(latestUploaded))
    }
    catch(error) {
        console.error("controllers/latestUploaded", error); return res.status(500).send("something went wrong")
    }
}