import {useState} from "react";
import {Link} from "react-router-dom";

export const Registration = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registration =  () => {

           fetch("http://127.0.0.1:8000/api/registration", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({userName, email, password})
           }).then(res=>console.log(res));

    }
    return(
        <div className="registration_wrapper">
            <div><h1>REGISTRATION</h1></div>
            <div className="registration_container">
                <form>
                    <input type="text" placeholder="Username" name="name" value={userName} onChange={e=> {setUserName(e.target.value); console.log(e.target.value)}}/>
                    <input type="email" placeholder="Email" name="name" value={email} onChange={e=> setEmail(e.target.value)}/>
                    <input type="text" placeholder="Password" name="name" value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button type="submit" onClick={registration}>Registration</button>
                    <div>Have account? <Link to={"/login"}>Login</Link></div>
                </form>
            </div>
        </div>
    )
};
