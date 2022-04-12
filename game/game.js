

class Game {

    constructor( title, description, initialState, stateRegistry ) {
        this.title = title;
        this.description = description;
        this.currentState = initialState;
        this.stateRegistry = stateRegistry;
    }

    getState() {
        return this.stateRegistry.getState( this.currentState );
    }

    /**
     *
     * @param transition: {SimpleTransition}
     * @returns {GameState}
     */
    apply( transition ) {
        this.currentState = transition.execute();
        return this.getState();
    }

}

export default Game;
