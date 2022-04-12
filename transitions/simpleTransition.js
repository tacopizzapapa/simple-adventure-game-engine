

class SimpleTransition {

    constructor( description, nextState ) {
        this.description = description;
        this.nextState = nextState;
    }

    getDescription() {
        return this.description;
    }

    /**
     *
     */
    execute() {
        return this.nextState;
    }

}

export default SimpleTransition;
