'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GameNode = exports.GAME_TYPE = undefined;

var _gatsbyNodeHelpers = require('gatsby-node-helpers');

var _gatsbyNodeHelpers2 = _interopRequireDefault(_gatsbyNodeHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createNodeHelpers = (0, _gatsbyNodeHelpers2.default)({
	typePrefix: 'Steam'
}),
    createNodeFactory = _createNodeHelpers.createNodeFactory,
    generateNodeId = _createNodeHelpers.generateNodeId,
    generateTypeName = _createNodeHelpers.generateTypeName;

var GAME_TYPE = exports.GAME_TYPE = 'Game';

var GameNode = exports.GameNode = createNodeFactory(GAME_TYPE);