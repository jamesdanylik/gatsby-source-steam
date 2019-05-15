# gatsby-source-steam

This is a source plugin for GatsbyJS to pull information from the Steam API.  

## Installation
Install as a dependancy from npm.

```sh
npm install gatsby-source-steam --save
```

## Configuration
Adjust your gatsby-config.js as follows:

```js
module.exports = {
  plugins: [
    {
    resolve: "gatsby-source-steam",
      options: {
        api_key: "<<YOUR STEAM API KEY>>", //key
        user_id: "<<A USER STEAM ID TO FOLLOW>>" // steamid
         }
    },
    ...
  ]
...
}
```

## Provided Queries

```graphql
{
  allSteamGame {
    edges {
      node {
        id
        name
        playtime_2weeks
        playtime_forever
        img_icon_url
        img_logo_url
      }
    }
  }
}
```
