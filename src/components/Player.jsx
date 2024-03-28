import { React, useState } from 'react';

export default function Player({initialName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){ //if not editing, turn on edit mode. If already in edit mode, turn it off.
        setIsEditing( (editing)  => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editPlayerName = <span className="player-name">{playerName}</span>

    if  (isEditing) { 
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              { editPlayerName }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = { handleEditClick }>{ isEditing ? 'Save' : 'Edit'}</button>

          </li>
    );
}