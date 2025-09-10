import '../styles/login.css';
import {useContext, useState} from "react";
// import axios from "axios";
import {AuthContext} from "./AuthContext";
import {useNavigate} from "react-router-dom";

const Login =()=>{
    const [form, setForm] = useState({email:"", password:""});
    const [message, setMessage] = useState("")
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setMessage("")
        try{
            const res = await login(form);
            // const res = await axios.post("http://localhost:5000/login",{
            //     email:form.email,
            //     password: form.password
            // });

            setMessage(res.message || "Logged in");
            navigate('/')
        } catch(err){
            setMessage(err.response?.data?.error || "Login failed");
        }
    }

    return (
        <div className={'login-page'}>
            <div className={'login-container'}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} className={'login-form'}>
                    <input type={'email'} onChange={handleChange} name={"email"} value={form.email} className={'email-password'} placeholder={'Email'}/>
                    <input type={'password'} onChange={handleChange} name={"password"} value={form.password} className={'password-input'} placeholder={'Password'}/>
                    <input type={'submit'} className={'login-btn'} value={'Sign in'}/>
                    <a href={'/'}>Forgot password</a>
                    <a href={'/register'}>Don't have an account? Sign up here</a>
                </form>
                {message}
            </div>
        </div>
    )
};

export default Login;