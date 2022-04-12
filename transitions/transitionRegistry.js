

class TransitionRegistry {

    constructor( typedFactoryMap, transitionDefinitions ) {
        this.typedFactoryMap = typedFactoryMap;
        this.transitionDefinitionMap = transitionDefinitions.reduce( ( accumulator, currentTransition ) => {

            accumulator[ currentTransition.id ] = currentTransition;
            return accumulator;

        }, {} );
        this.transitionCache = {};
    }

    getTransition( id ) {

        if ( this.transitionCache[ id ] ) {
            return this.transitionCache[ id ];
        }

        if ( this.transitionDefinitionMap[ id ] &&
            this.transitionDefinitionMap[ id ].type &&
            this.typedFactoryMap[ this.transitionDefinitionMap[ id ].type ] ) {
            this.transitionCache[ id ] =
                this.typedFactoryMap[ this.transitionDefinitionMap[ id ].type ]( this.transitionDefinitionMap[ id ] );
            return this.transitionCache[ id ];
        } else {
            throw new Error( `Invalid or missing transition definition for ${id}` );
        }

    }

}

export default TransitionRegistry;
