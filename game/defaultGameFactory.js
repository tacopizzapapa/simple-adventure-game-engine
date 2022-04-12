import simpleTransitionFactory from "../transitions/simpleTransitionFactory.js";
import TransitionRegistry from "../transitions/transitionRegistry.js";

import GameStateRegistry from "../states/gameStateRegistry.js";

import Game from "./game.js";

function defaultGameFactory( o ) {
    const transitionRegistry = new TransitionRegistry( {
            "simple": simpleTransitionFactory
        },
        o.transitions );

    const stateRegistry = new GameStateRegistry( o.states, transitionRegistry );

    return new Game( o.title, o.description, o.initialState, stateRegistry );
}

export default defaultGameFactory;
