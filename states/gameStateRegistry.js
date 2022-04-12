import GameState from "./gameState.js";

class GameStateRegistry {

    constructor( gameStateDefinitions, transitionRegistry ) {

        this.statesById = gameStateDefinitions.reduce((accumulator, currentState) => {

            accumulator[currentState.id] = currentState;
            return accumulator;

        }, {});
        this.stateCache = {};
        this.transitionRegistry = transitionRegistry;

    }

    getState( id ) {

        if ( this.stateCache[ id ] ) {
            return this.stateCache[ id ];
        }

        if ( this.statesById[ id ] ) {
            const stateDefinition = this.statesById[ id ];

            this.stateCache[ id ] = new GameState(
                stateDefinition.id,
                stateDefinition.description,
                ( stateDefinition.transitions || [] ).map( currentTransition =>
                    this.transitionRegistry.getTransition( currentTransition ) ),
                stateDefinition.metadata
            );

            return this.stateCache[ id ];
        } else {
            throw new Error( `Cannot instantiate undefined state id ${id}` );
        }

    }

}

export default GameStateRegistry;
