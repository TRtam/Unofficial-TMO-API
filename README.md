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

### Trending

```GET``` http://localhost:80/api/v1/trending

```GET``` http://localhost:80/api/v1/trending/josei

```GET``` http://localhost:80/api/v1/trending/seinen

### Latest Added

```GET``` http://localhost:80/api/v1/latestAdded


### Latest Uploaded

```GET``` http://localhost:80/api/v1/latestUploaded

<details>
    <summary>query (optional)</summary>
    
    page
</details>

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

### Library
```GET``` http://localhost:80/api/v1/library/:href

### Reader
```GET``` http://localhost:80/api/v1/reader/:href

## License
MIT