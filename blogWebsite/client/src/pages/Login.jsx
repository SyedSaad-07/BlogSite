import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () =>{
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate();
    const handleChange = (e) =>{
        
        const {name, value} = e.target;
        setInputs( prev => ({...prev, [name] : value}));

    }
    console.log(inputs);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            // const res = await axios.post("http://localhost:8800/api/auth/login", inputs);
            setInputs({
                email:' ',
                password:' '
            });
            navigate("/");
            // console.log(res);
            // var inputVal = document.querySelectorAll('input');
            // console.log(inputVal.innerText);
            // inputVal.forEach((val => {
            //     inputVal.value.innerText = '';
            // }))
        }catch(err){
            setError(err.response.data);
            navigate("/register");
        }

    }
    return(
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text"  placeholder="email" name="email" onChange={handleChange}/>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login;