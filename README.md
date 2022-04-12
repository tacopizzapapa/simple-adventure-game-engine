# Simple Adventure Game Engine

A dead simple choose your own adventure game engine for Javascript.

## Usage

`npm install --save simple-adventure-game-engine`

```javascript
import { defaultGameFactory } from 'simple-adventure-game-engine';

const game = defaultGameFactory( {
    // ... my game definition
} );

// Actually do something with the game
console.log( game.getState().getDescription() );
```

## Game Object Definition

```json
{
    "title": "Test Game",
    "description": "A simple test game",
    "initialState": "state-1",
    "transitions": [
        {
            "id": "transition-s1-1",
            "description": "Yes",
            "nextState": "state-happy-ending",
            "type": "simple"
        },
        {
            "id": "transition-s1-2",
            "description": "No",
            "nextState": "state-bad-ending",
            "type": "simple"
        }
    ],
    "states": [
        {
            "id": "state-1",
            "transitions": [ "transition-s1-1", "transition-s1-2" ],
            "description": "You are playing this great game.  Are you having fun?"
        },
        {
            "id": "state-happy-ending",
            "description": "That's fantastic.  Thanks for playing."
        },
        {
            "id": "state-bad-ending",
            "description": "Boo"
        }
    ]
}
```