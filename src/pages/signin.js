import '../styles/register.css';
import {useContext, useState} from "react";
import {AuthContext} from "./AuthContext";
import {useNavigate} from "react-router-dom";
// import axios from "axios";

const Signin = () => {
    const [form, setForm] = useState({name:"", email:"", password:""})
    const [message, setMessage] = useState("")
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        try{
            // const response = await axios.post('http://localhost:5000/register',{
            //     name: form.name,
            //     email: form.email,
            //     password: form.password
            // })
            const res = await register(form);
            setMessage(res.message || "Registered Successfully");
            navigate("/login")
        }catch (error) {
            setMessage(error.response?.data?.error || "Something went wrong")
        }
    }

    return (
        <div className={'register'}>
            <div className={'signin-container'}>
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit} className={'register-form'}>
                    <input type={'text'} name={"name"} onChange={handleChange} value={form.name} className={'name-input'} placeholder={'Name'}/>
                    <input type={'email'} name={"email"} onChange={handleChange} value={form.email} className={'email-input'} placeholder={'Email'}/>
                    <input type={'password'} name={"password"} onChange={handleChange} value={form.password} className={'password-input'} placeholder={'Password'}/>
                    <input type={'password'} className={'password-input'} placeholder={'Confirm Password'}/>
                    <input type={'submit'} className={'submit-btn'} value={'Submit'}/>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
};

export default Signin;