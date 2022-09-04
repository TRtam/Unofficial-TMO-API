# Unofficial TMO API

## Disclaimer
This is only for learnings purpose.

## How to run it
1. Requirements
    * [NodeJS](https://nodejs.org/es/)

2. Clone this project into your machine
3. Open the terminal in the root folder
4. Run the following commands
    * ```npm install```
    * ```npm run start```
5. Go to http://localhost:80/api/v1 to see if it works

## v1 Routes
### Populars
```GET``` http://localhost:80/api/v1/populars

<details>
    <summary>query (optional)</summary>
    
    page
</details>

```GET``` http://localhost:80/api/v1/populars/josei

```GET``` http://localhost:80/api/v1/populars/seinen

    GET http://localhost:80/api/v1/populars

    [
        {
        "href": "",
        "title": "",
        "thumbnail": "",
        "score": "",
        "type": "",
        "demography": ""
        },
        ...
    ]

### Trending

```GET``` http://localhost:80/api/v1/trending

```GET``` http://localhost:80/api/v1/trending/josei

```GET``` http://localhost:80/api/v1/trending/seinen

    GET http://localhost:80/api/v1/trending

    [
        {
        "href": "",
        "title": "",
        "thumbnail": "",
        "score": "",
        "type": "",
        "demography": ""
        },
        ...
    ]

### Latest Added

```GET``` http://localhost:80/api/v1/latestAdded

    GET http://localhost:80/api/v1/latestAdded
    
    [
        {
        "href": "",
        "title": "",
        "thumbnail": "",
        "score": "",
        "type": "",
        "demography": ""
        },
        ...
    ]


### Latest Uploaded

```GET``` http://localhost:80/api/v1/latestUploaded

<details>
    <summary>query (optional)</summary>
    
    page
</details>

    GET http://localhost:80/api/v1/latestUploaded

    [
        {
        "href": "",
        "title": "",
        "thumbnail": "",
        "score": "",
        "type": "",
        "demography": ""
        },
        ...
    ]

### Search

```GET``` http://localhost:80/api/v1/search


<details>
    <summary>query (optional)</summary>
    
    page
    title
    orderBy
    orderDir
    filterBy
    type
    demography
    status
    translationStatus
    webcomic
    yonkoma
    amateur
    erotic
    genders
    excludeGenders
</details>

    GET http://localhost:80/api/v1/search

    [
        {
        "href": "",
        "title": "",
        "thumbnail": "",
        "score": "",
        "type": "",
        "demography": ""
        },
        ...
    ]

### Library
```GET``` http://localhost:80/api/v1/library/:href

    GET http://localhost:80/api/v1/library/https%3A%2F%2Flectortmo.com%2Flibrary%2Fmanga%2F12942%2FTsuki-ga-Michibiku-Isekai-Douchuu

    {
        "type": "MANGA",
        "score": "9.33",
        "demography": "Shounen",
        "thumbnail": "https://otakuteca.com/images/books/cover/6228f3590afbf.jpg",
        "title": "Tsuki ga Michibiku Isekai Douchuu",
        "year": "2015",
        "description": "Misumi Makoto era solo un estudiante normal, hasta que fue invocado a otro mundo a causa de sus padres. Pero la diosa de ese mundo decidió que el era feo y por eso lo arrojó al paramo en los extremos más lejanos de ese mundo. Vagando por las tierras baldías en busca de calor humano, todos los encuentros de Makoto son con seres no-humanos, incluso sus 2 hermosas compañeras son un dragón y una araña gigante. ¿Exactamente a donde lo llevara el gran viaje de Makoto?",
        "genres": [
            "Acción",
            "Aventura",
            "Comedia",
            "Fantasia",
            "Romance",
            "Magia",
            "Harem"
        ],
        "status": "Publicándose",
        "chapters": [
            {
                "name": "Lime es muy Popular.",
                "chapter": "77.00",
                "uploadedBy": "Uchuujin Projects, ✦╏Muslos no Sekai, Miru FanSub",
                "uploadedDate": "2022-08-29",
                "href": "https://lectortmo.com/view_uploads/1077206"
            },
            ...
        ]
    }

### Reader
```GET``` http://localhost:80/api/v1/reader/:href

    GET http://localhost:80/api/v1/reader/https%3A%2F%2Flectortmo.com%2Fview_uploads%2F1081438

    {
        "name": "Mi vecina llorona divorciada",
        "chapter": "43.00",
        "uploadedBy": "UN SCAN QUE TRADUCE",
        "images": [
            "https://img1.japanreader.com/uploads/20220904/f3b998600e66ae3a8565759d0525c0ad/cc178846.jpg",
            "https://img1.japanreader.com/uploads/20220904/f3b998600e66ae3a8565759d0525c0ad/94638946.jpg",
            "https://img1.japanreader.com/uploads/20220904/f3b998600e66ae3a8565759d0525c0ad/368675d2.jpg",
            "https://img1.japanreader.com/uploads/20220904/f3b998600e66ae3a8565759d0525c0ad/10ab46a1.jpg",
            "https://img1.japanreader.com/uploads/20220904/f3b998600e66ae3a8565759d0525c0ad/b1ed662a.jpg"
        ],
        "referer": "https://lectortmo.com/viewer/f3b998600e66ae3a8565759d0525c0ad/cascade"
    }

## License
MIT