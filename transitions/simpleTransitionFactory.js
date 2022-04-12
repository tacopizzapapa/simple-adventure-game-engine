import SimpleTransition from "./simpleTransition.js";

/**
 *
 * Expects an object of the form
 *
 * <pre>
 *     {
 *         "description": "...",
 *         "nextState": "..."
 *     }
 * </pre>
 *
 * @param o Object matching a simple transition JSON schema
 * @returns {SimpleTransition}
 */
function simpleTransitionFactory( o ) {
    return new SimpleTransition( o.description, o.nextState );
}

export default simpleTransitionFactory;
