import { useState } from 'react'
import FormHeading from '../Components/FormHeading'
import FormInput from '../Components/FormInput'
import Button from '../Components/Button';
import Formbox from '../Components/Formbox';
import { Link } from 'react-router-dom';


export default function SignUpForm() {
    const [name, setName] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [companyemail, setCompanyemail] = useState('');
    const [employeesize, setEmployeesize] = useState(0);
    const [password, setPassword] = useState('');


    function handleProcced() {
        inputData(name, phoneno, companyname, companyemail, employeesize);
    }
    return (
        <>
            <Formbox >
                <FormHeading
                    heading="Sign Up"
                    subheading="loren ipsum is simple dumy text"
                />
                <FormInput
                    inputfield="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                    inputfield="Phone no."
                    onChange={(e) => setPhoneno(e.target.value)}
                />
                <FormInput
                    inputfield="Company Name"
                    onChange={(e) => setCompanyname(e.target.value)}
                />
                <FormInput
                    inputfield="Company Email"
                    onChange={(e) => setCompanyemail(e.target.value)}
                />
                <FormInput
                    inputfield="Employee Size"
                    onChange={(e) => setEmployeesize(e.target.value)}
                />
                <FormInput
                    inputfield="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <Link to="/otpauth" state={{ name, phoneno, companyname, companyemail, employeesize, password }}>
                    <Button btntype="procced" />
                </Link>
                <p className='text-center'>If you already have an account then <span className='text-blue-400'><Link to='/login'>Login</Link></span></p>
            </Formbox>
        </>
    )
}


