import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const login = () => {

        fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        }).then(res => res.json())
            .then(res => {
                if(res.error) {
                    setError(res.error);
                }
                else{
                    navigate("/categories");
                }
            });

    }

    return (
        <div className="registration_wrapper">
            <div><h1>LOGIN</h1></div>
            <div className="registration_container">
                <form>
                    <input type="email" placeholder="Email" name="name" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Password" name="name" value={password}
                           onChange={e => setPassword(e.target.value)}/>

                    <button type="button" onClick={login}>Login</button>
                    <div>No account? <Link to={"/registration"}>Registration</Link></div>
                </form>
                <div className="error">
                    {error}
                </div>
            </div>
        </div>
    )
};
