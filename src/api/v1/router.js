const router = require("express").Router()

router.get("/", (_, res) => {
    res.status(200).send("under development")
})

const controllers = {
    populars: require("./controllers/populars"),
    trending: require("./controllers/trending"),
    latestAdded: require("./controllers/latestAdded"),
    latestUploaded: require("./controllers/latestUploaded"),
    search: require("./controllers/search"),
    library: require("./controllers/library"),
}

router.get("/populars", controllers.populars.index)
router.get("/populars/josei", controllers.populars.josei)
router.get("/populars/seinen", controllers.populars.seinen)

router.get("/trending", controllers.trending.index)
router.get("/trending/josei", controllers.trending.josei)
router.get("/trending/seinen", controllers.trending.seinen)

router.get("/latestAdded", controllers.latestAdded)
router.get("/latestUploaded", controllers.latestUploaded)

router.get("/search", controllers.search)

router.get("/library/:href", controllers.library)

module.exports = router