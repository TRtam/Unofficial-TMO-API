# Unofficial TMO API

## Disclaimer
This is only for learnings purpose.

##
### Populars
```GET``` [http://localhost:80/api/v1/populars]

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