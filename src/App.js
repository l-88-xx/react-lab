import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";



function App() {
const [email, setEmail] = useState('anna@agh.edu.pl');

const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
<div className = "container">

<h1>Witaj w systemie do zapisów na zajęcia</h1>
Zaloguj się emailem:
{!isLoggedIn &&<div>
<input type="text" onChange={(event)=>setEmail(event.target.value)}/>

<button onClick={() => setIsLoggedIn(true)}>Zaloguj się</button>
</div>}

{isLoggedIn && <div>
<h1>Witaj {email }</h1>
<button onClick={() => setIsLoggedIn(false)}>Wyloguj</button>

</div>}
</div>
);
}
export default App;