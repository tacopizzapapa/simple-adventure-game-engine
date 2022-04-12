import pkg from 'should';
const { should } = pkg;

import TransitionRegistry from "../transitions/transitionRegistry.js";

const registry = new TransitionRegistry( {
    "a": () => "a",
    "b": () => "b"
}, [
    {
        id: "t1",
        type: "a"
    },
    {
        id: "t2",
        type: "b"
    },
    {
        id: "t3",
        type: "c"
    },
    {
        id: "t4"
    }
] );

describe( 'TransitionRegistry', () => {

    describe( 'getTransition', () => {

        it( 'Should return a transition for a known ID of a well defined transition', () => {

            const transitionA = registry.getTransition( 't1' );
            const transitionB = registry.getTransition( 't2' );

            transitionA.should.equal( 'a' );
            transitionB.should.equal( 'b' );

        } );

        it( 'Should fail to return a transition for an unknown ID', () => {

            ( function() {
                registry.getTransition( 'unknown' );
            } ).should.throw();

        } );

        it( 'Should fail to return a transition for an unknown type', () => {

            ( function() {
                registry.getTransition( 't3' );
            } ).should.throw();

        } );

        it( 'Should fail to return a transition for a missing type', () => {

            ( function() {
                registry.getTransition( 't4' );
            } ).should.throw();

        } );

    } );

} );