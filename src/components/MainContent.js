import { useState } from 'react';
import './MainContent.css';

export const MainContent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    const onLoginHandler = () => {
        alert( `
        Username: ${username}
        Password: ${password}`)
    }

    const onResetHandler = () =>{
        setUsername("");
        setPassword("");
    }

    return (
        <div className="main">
            <div className="form">
                <h1> Login </h1>
                <input type="text" placeholder="username" value={username} onChange={onChangeUsernameHandler}></input>
                <input type="password" placeholder="password" value={password} onChange={onChangePasswordHandler}></input>
                <button id="login-button" onClick={onLoginHandler}> login </button>
                <button id="reset-button" onClick={onResetHandler}> reset </button>
            </div>
        </div>
    )
}