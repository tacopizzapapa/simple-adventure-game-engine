import 'should';

import { defaultGameFactory } from '../index.js';

import gameDefinition from "./mocks/mockGameDefinition.js";

describe( 'Game', () => {

    it( 'Should let us play the game', () => {

        const game = defaultGameFactory( gameDefinition );

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