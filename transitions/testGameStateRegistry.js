import * as should from 'should';

import GameStateRegistry from "../states/gameStateRegistry.js";

const mockTransitions = {
    t1: "T1",
    t2: "T2"
};

const stateRegistry = new GameStateRegistry( [
    {
        id: "s1",
        description: "S1 Description",
        transitions: [ "t1", "t2" ],
        metadata: "metadata"
    }
], {
    getTransition: ( id ) => {
        return mockTransitions[ id ];
    }
} );

describe( 'GameStateRegistry', () => {

    describe( 'getState', () => {

        it( 'Should return a game state for a defined state id', () => {
            const state = stateRegistry.getState( 's1' );

            state.getDescription().should.equal( 'S1 Description' );
            state.getMetadata().should.equal( 'metadata' );
            state.getTransitions().should.match( [ 'T1', 'T2' ] );

        } );

        it( 'Should fail to return a game state for an undefined state id', () => {

            ( function() {
                stateRegistry.getState( 'unknown' );
            } ).should.throw();

        } );

    } )

} );