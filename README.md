# gatsby-source-steam
This is a source plugin for GatsbyJS to pull information from the [Steam API](https://developer.valvesoftware.com/wiki/Steam_Web_API).

## Prerequisites
Use of the plugin requires:
 * a valid Steam ID 
 * a valid Steam API Key

## Obtaining an Steam Web API Key
All use of the Steam Web API requires the use of an API Key. You can acquire one by [filling out this form](https://steamcommunity.com/dev/apikey). Use of the APIs also requires that you agree to the [Steam API Terms of Use](https://steamcommunity.com/dev/apiterms).

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
