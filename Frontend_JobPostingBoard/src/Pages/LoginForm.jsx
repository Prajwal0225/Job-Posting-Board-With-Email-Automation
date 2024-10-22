import axios from "axios";
import Button from "../Components/Button";
import Formbox from "../Components/Formbox";
import FormHeading from "../Components/FormHeading";
import FormInput from "../Components/FormInput";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function LoginForm() {

    const [companyname, setcompanyname] = useState();
    const [password, setpassword] = useState();

    async function handleLogin() {
        try {
            const login = await axios.post('http://localhost:80/auth/login', {
                companyname,
                password
            })
            localStorage.setItem('token', login.data.token);
        } catch (error) {
            console.log("Error whilc login");
        }
    }


    return (
        <>
            <Formbox>
                <FormHeading heading="Login" subheading="Welcome back" />
                <FormInput onChange={(e) => setcompanyname(e.target.value)} inputfield="Company Name" />
                <FormInput onChange={(e) => setpassword(e.target.value)} type="password" inputfield="Password" />
                <Button onClick={handleLogin} btntype="Login" />
                <p className='text-center'>Don't have account create a account <span className='text-blue-400'><Link to='/signup'>SignUp</Link></span></p>
            </Formbox>
        </>
    )
}