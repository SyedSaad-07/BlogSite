import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () =>{

    const [inputs, setInputs] = useState({
        name:"",
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
            // await axios.post("http://localhost:8800/api/auth/register", inputs);
            setInputs({
                name:' ',
                email:' ',
                password:' '
            });
            navigate("/");
            // console.log(res, inputs);
            // var inputVal = document.querySelectorAll('input');
            // console.log(inputVal.innerText);
            // inputVal.forEach((val => {
            //     inputVal.value.innerText = '';
            // }))
        }catch(err){
            setError(err.response.data);
            navigate("/login");
        }

    }
    return(
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text"  placeholder="username" name="name" onChange={handleChange}/>
                <input required type="email" placeholder="email" name="email" onChange={handleChange}/>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Register</button>
                {err  && <p>{err}</p>}
                <span>
                    Do have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Register;