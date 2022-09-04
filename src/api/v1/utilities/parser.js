const cheerio = require("cheerio")

const populars = html => {
    const $ = cheerio.load(html)
            
    const result = []

    $(".element").each((_, element) => {
        const node = $(element)

        const href = node.children("a").attr("href").trim()
        const title = node.find(".thumbnail-title > h4").text()
        const thumbnail = node.find("style").html().match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)[0].trim()
        const score = node.find(".score > span").text()
        const type = node.find(".book-type").text()
        const demography = node.find(".demography").text()

        result.push({
            href,
            title,
            thumbnail,
            score,
            type,
            demography
        })
    })

    return result
}

const trending = html => {
    return populars(html)
}

const latestAdded = html => {
    return populars(html)
}

const latestUploaded = html => {
    const $ = cheerio.load(html)
            
    const result = []

    $("div.col-6").each((i, element) => {
        const node = $(element)

        const href = node.children("a").attr("href").trim()
        const title = node.find(".thumbnail-title > h4").text()
        const thumbnail = node.find("style").html().match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)[0].trim()
        const score = node.find(".score > span").text()
        const type = node.find(".book-type").text()
        const uploadedTime = node.find(".upload_time > span").text()
        const uploadedBy = node.find(".uploaded_by > span").text()
        const chapter = node.find(".chapter-number > .number").text()

        result.push({
            href,
            title,
            thumbnail,
            score,
            type,
            uploadedTime,
            uploadedBy,
            chapter
        })
    })

    return result
}

const search = html => {
    return populars(html)
}

const library = html => {
    const $ = cheerio.load(html)

    const result = {}

    result.type = $("h1.book-type").text()
    result.score = $("div.score > a > span").text()
    result.demography = $("div.demography").text()
    result.thumbnail = $("img.book-thumbnail").attr("src")
    result.title = $("h2.element-subtitle").text()
    result.year = $("h1.element-title > small").text().replace("( ", "").replace(" )", "")
    result.description = $("p.element-description").text()
    result.genres = $("h6 > a").map((_, element) => $(element).text()).toArray()
    result.status = $("span.book-status").text()

    result.chapters = $("li.list-group-item.p-0.upload-link").map((_, element) => {
        const node = $(element)

        const aInnerText = node.find("h4 > div > div > a").text().replace(/\s|&nbsp;/g, " ").trim().split(" ").filter(value => value !== "")

        const name = aInnerText.slice(2).join(" ")
        const chapter = aInnerText.slice(1, 2).join("").replace(":", "")

        return node.find("ul.list-group > li.list-group-item").map((_, element) => {
            const _node = $(element)

            const uploadedBy = _node.find("div > div.col-4.col-md-6.text-truncate > span > a").map((_, element) => $(element).text()).toArray().join(", ")
            const uploadedDate = _node.find("div > div.col-4.col-md-2.text-center > span").text().trim()
            const href = _node.find("div > div.col-2.col-sm-1.text-right > a").attr("href")

            return {
                name,
                chapter,
                uploadedBy,
                uploadedDate,
                href
            }
        }).toArray()
    }).toArray()

    return result
}

const reader = html => {
    const $ = cheerio.load(html)

    const result = {}

    result.name = $("h1").text()
    result.chapter = $("h2").text().trim().split(" ")[1]
    result.uploadedBy = $("h2 > a").text()
    result.images = $("div.img-container > img").map((_, element) => $(element).data("src")).toArray()

    return result
}

module.exports = {
    populars,
    trending,
    latestAdded,
    latestUploaded,
    search,
    library,
    reader
}