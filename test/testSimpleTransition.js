import 'should';

import SimpleTransition from '../transitions/simpleTransition.js';

const transition = new SimpleTransition( 'My Description', 'next-state' );

describe( 'SimpleTransition', () => {

    describe( 'getDescription', () => {

        it( 'Should return the description', () => {
            transition.getDescription().should.equal( 'My Description' );
        } );

    } );

    describe( 'execute', () => {

        it( 'Should return the state ID provided at construction', () => {
            transition.execute().should.equal( 'next-state' );
        } );

    } );

} );