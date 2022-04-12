import * as should from 'should';

import simpleTransitionFactory from "../transitions/simpleTransitionFactory.js";
import TransitionRegistry from "../transitions/transitionRegistry.js";

import GameStateRegistry from "../states/gameStateRegistry.js";

import Game from "../game/game.js";

const gameDefinition = {
    transitions: [
        {
            id: "transition-s1-1",
            description: "Yes",
            nextState: "state-happy-ending",
            type: "simple"
        },
        {
            id: "transition-s1-2",
            description: "No",
            nextState: "state-bad-ending",
            type: "simple"
        }
    ],
    states: [
        {
            id: "state-1",
            transitions: [ "transition-s1-1", "transition-s1-2" ],
            description: "You are playing this great game.  Are you having fun?"
        },
        {
            id: "state-happy-ending",
            description: "That's fantastic.  Thanks for playing."
        },
        {
            id: "state-bad-ending",
            description: "Boo"
        }
    ]
};

const transitionRegistry = new TransitionRegistry( {
        "simple": simpleTransitionFactory
    },
    gameDefinition.transitions );

const stateRegistry = new GameStateRegistry( gameDefinition.states, transitionRegistry );

describe( 'Game', () => {

    it( 'Should let us play the game', () => {

        const game = new Game( 'A Test Game', 'A short little test game', 'state-1', stateRegistry );

        const firstState = game.getState();

        firstState.getDescription().should.equal( 'You are playing this great game.  Are you having fun?' );

        const firstTransitionOptions = firstState.getTransitions();

        firstTransitionOptions[ 0 ].getDescription().should.equal( 'Yes' );
        firstTransitionOptions[ 1 ].getDescription().should.equal( 'No' );

        game.apply( firstTransitionOptions[ 0 ] );

        const secondState = game.getState();

        secondState.getDescription().should.equal( 'That\'s fantastic.  Thanks for playing.' );
        secondState.getTransitions().should.have.length( 0 );

    } );

} );