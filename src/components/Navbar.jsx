import { useNavigate } from "react-router-dom";

function Navbar(){
    const router = useNavigate ();

    
    return (
        <div>
            <button onClick={() => router("/register")}>Register</button>
            <button onClick={() => router("/login")}>Login</button>
            <h2>navbar</h2>
        </div>
    );
}

export default Navbar;