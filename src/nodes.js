import createNodeHelpers from 'gatsby-node-helpers'

const {
	createNodeFactory,
	generateNodeId,
	generateTypeName,
} = createNodeHelpers({
	typePrefix: `Steam`,
})

export const GAME_TYPE = `Game`

export const GameNode = createNodeFactory(GAME_TYPE)