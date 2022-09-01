const userAgents = require("user-agents")

const {getBrowser, onlyHTML} = require("../utilities/browser")
const {search: parse} = require("../utilities/parser")

module.exports = async (req, res) => {
    const {query: {title, orderBy, orderDir, filterBy, type, demography, status, translationStatus, webcomic, yonkoma, amateur, erotic, genders, excludeGenders, page}} = req

    const url = `https://lectortmo.com/library?_pg=1
        &title=${title ? title : ""}
        &order_item=${orderBy ? orderBy : ""}
        &order_dir=${orderDir ? orderDir : ""}
        &filter_by=${filterBy ? filterBy : ""}
        &type=${type ? type : ""}
        &demography=${demography ? demography : ""}
        &status=${status ? status : ""}
        &translation_status=${translationStatus ? translationStatus : ""}
        &webcomic=${webcomic ? webcomic : ""}
        &yonkoma=${yonkoma ? yonkoma : ""}
        &amateur=${amateur ? amateur : ""}
        &erotic=${erotic ? erotic : ""}
        ${genders ? genders.split(",").map(gender => `&genders[]=${gender}`).join("") : ""}
        ${excludeGenders ? excludeGenders.split(",").map(gender => `&exclude_genders[]=${gender}`).join("") : ""}
        ${page ? `&page=${page}` : ""}
    `

    try {
        const page = await (await getBrowser()).newPage()

        await page.setUserAgent(userAgents.toString())

        await onlyHTML(page)

        await page.goto(url, {
            awaitUntil: "domcontentloaded"
        })

        const result = await (await page.waitForSelector("#app > main > div:nth-child(2) > div.col-12.col-lg-8.col-xl-9 > div:nth-child(3)")).evaluate(element => element.innerHTML)

        await page.close()

        return res.status(200).json(parse(result))
    }
    catch(error) {
        console.log("controllers/search", error); return res.status(500).send("something went wrong")
    }
}