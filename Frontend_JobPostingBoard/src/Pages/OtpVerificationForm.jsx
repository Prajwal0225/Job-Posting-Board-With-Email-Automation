import { useEffect, useState } from "react";
import Button from "../Components/Button";
import Formbox from "../Components/Formbox";
import FormHeading from "../Components/FormHeading";
import FormInput from "../Components/FormInput";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OtpVerificationForm() {
    const location = useLocation();
    const { name, phoneno, companyname, companyemail, employeesize, password } = location.state || {};
    const [emailOTPSend, setemailOTPSend] = useState(0);
    const [emailVerify, setEmailVerify] = useState(false);
    const [mobilVerify, setMobileVerify] = useState(false);
    const [emailOTP, setEmailOTP] = useState();
    const [phoneOTP, setMobileOTP] = useState();
    const navigate = useNavigate();

    async function handleSignUp() {
        try {
            if (mobilVerify && emailVerify) {
                const addCompany = await axios.post('http://localhost:80/auth/signin', {
                    name,
                    phoneno,
                    companyname,
                    companyemail,
                    employeesize,
                    password
                })
                console.log(addCompany.data);
                localStorage.setItem("token", addCompany.data.token);

                navigate('/dashboard');
            } else {
                console.log("Sign Up Fail");
            }
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    }

    function handleEmailOtp() {
        if (emailOTP === emailOTPSend) {
            setEmailVerify(true);
        }
    }

    async function handleMobileOtp() {
        try {

            const motp = await axios.post('http://localhost:80/auth/mobileauth', {
                "mobileno": phoneno,
                "otpCode": phoneOTP
            })
            if (motp.data.status == 'approved') {
                setMobileVerify(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Send OTP to mobile and email
    useEffect(() => {
        async function sendAuth() {
            try {
                const otp = await axios.post('http://localhost:80/auth/sendOTP', {
                    "mobileno": phoneno,
                    "email": companyemail
                })
                setemailOTPSend(otp.data.emailOTP);
            } catch (error) {
                console.log("Error sending OTP:" + error);
            }
        }
        sendAuth();
    }, [])

    return (
        <>
            <Formbox>
                <FormHeading
                    heading="Sign Up"
                    subheading="loren ipsum is simple dumy text"
                />
                <FormInput onChange={(e) => setEmailOTP(e.target.value)} inputfield="Email OTP" />
                <Button onClick={handleEmailOtp} btntype={emailVerify ? "Verified" : "Verify"} />

                <FormInput onChange={(e) => setMobileOTP(e.target.value)} inputfield="Mobile OTP" />
                <Button onClick={handleMobileOtp} btntype={mobilVerify ? "Verified" : "Verify"} />
                <Button onClick={handleSignUp} btntype="SignUp" />

            </Formbox>
        </>
    )
}
