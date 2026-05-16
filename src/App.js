import './App.css';
import { useState } from "react";

function App() {

    // stany komponentów
    const [email, setEmail] = useState('anna@agh.edu.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {!isLoggedIn && (
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <p>Zaloguj się e-mailem</p>
                    <input type="text" value={email} onChange={handleChange}/>
                    <button type="button" onClick={handleLogin}>
                        Wchodzę
                    </button>
                </div>
            )}
            {isLoggedIn && (
                <div>
                    <h2>Witaj: {email}</h2>
                    <button type="button" onClick={handleLogout}
                    style={{color: "blue"}}> Wyloguj </button>
                </div>
            )}
        </div>
    );
}
export default App;