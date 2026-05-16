import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";


function App() {
const [email, setEmail] = useState('anna@agh.edu.pl');
const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
<div className = "container">

<h1>Witaj w systemie do zapisów na zajęcia</h1>
{ !isLoggedIn && <LoginForm onLogin={() => {}}/> }

{isLoggedIn && <div>
<h1>Witaj {email }</h1>
<a onClick={() => setIsLoggedIn(false)}>Wyloguj</a>

</div>}
</div>
);
}
export default App;