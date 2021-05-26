import {
	GameNode,
	GAME_TYPE
} from './nodes'

import fetch from 'isomorphic-fetch'

function api(url) {
	return fetch(url).then(results=> {
		return results.json()
	})
}

function recentGamesUrl(options) {
	var url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?format=json";

	for (var property in options) {
		url += '&' + property + '=' + options[property];
	}

	return url;
}

exports.sourceNodes = async({boundActionCreators}, {
	api_key,
	user_id
}) => {
	const { createNode } = boundActionCreators

	var j = await api(recentGamesUrl({ "key": api_key, "steamid": user_id }))

	if (j.response.games.length > 0) {
		j.response.games.map(function (game) {
			createNode(GameNode({
				id: game.appid,
				name: game.name,
				playtime_2weeks: game.playtime_2weeks,
				playtime_forever: game.playtime_forever,
				img_icon_url: game.img_icon_url,
				img_logo_url: game.img_logo_url
			}))
		});
	}

	return
}