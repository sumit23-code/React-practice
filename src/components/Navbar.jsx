import { useNavigate } from "react-router-dom";

function Navbar(){
    const router = useNavigate ();

    
    return (
        <div>
            <button onClick={() => router("/")}>Home</button>
            <button onClick={() => router("/register")}>Register</button>
            <button onClick={() => router("/login")}>Login</button>
            <button onClick={() => router("/use-state")}>UseState</button>
            <button onClick={() => router("/use-effect")}>UseEffect</button>
            <h2>navbar</h2>
        </div>
    );
}

export default Navbar;