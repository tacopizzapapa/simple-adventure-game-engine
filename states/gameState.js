

class GameState {

    constructor( id, description, transitions, metadata ) {
        this.id = id;
        this.description = description;
        this.transitions = transitions;
        this.metadata = metadata;
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    getTransitions() {
        return this.transitions;
    }

    getMetadata() {
        return this.metadata;
    }

}

export default GameState;
