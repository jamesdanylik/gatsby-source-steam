'use strict';

var _nodes = require('./nodes');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function api(url) {
	return (0, _isomorphicFetch2.default)(url).then(function (results) {
		return results.json();
	});
}

function recentGamesUrl(options) {
	var url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?format=json";

	for (var property in options) {
		url += '&' + property + '=' + options[property];
	}

	return url;
}

exports.sourceNodes = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, _ref2) {
		var actions = _ref.actions,
		    api_key = _ref2.api_key,
			user_id = _ref2.user_id;
		var createNode, j;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						createNode = actions.createNode;
						_context.next = 3;
						return api(recentGamesUrl({ "key": api_key, "steamid": user_id }));

					case 3:
						j = _context.sent;

						if (j.response.games.length > 0) {
							j.response.games.map(function (game) {
								createNode((0, _nodes.GameNode)({
									id: game.appid,
									name: game.name,
									playtime_2weeks: game.playtime_2weeks,
									playtime_forever: game.playtime_forever,
									img_icon_url: game.img_icon_url,
									img_logo_url: game.img_logo_url
								}));
						});
					}

					return _context.abrupt('return');

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2) {
		return _ref3.apply(this, arguments);
	};
}();