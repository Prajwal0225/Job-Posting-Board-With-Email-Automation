import { useState } from "react";
import Button from "../Components/Button";
import Formbox from "../Components/Formbox";
import FormInput from "../Components/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function JobPosting() {
    const [jobTitle, setJobTitle] = useState();
    const [jobDescription, setjobDescription] = useState();
    const [experienceLevel, setExperienceLevel] = useState();
    const [candidatesEmail, setCandidatesEmail] = useState();
    const [endDate, setEndDate] = useState();
    const navigate = useNavigate();

    async function handlePosting() {
        const token = localStorage.getItem('token');
        try {
            const postjob = await axios.post('http://localhost:80/job/posting', {
                jobTitle,
                jobDescription,
                experienceLevel,
                candidatesEmail,
                endDate
            }, {
                headers: {
                    'Authorization': token
                }
            })
            navigate('/dashboard');
        } catch (error) {
            console.log("Error while posting the job " + error);
        }
    }

    return (
        <>
            <Formbox>
                <div>
                    <h1 className="text-xl font-bold">Job Title</h1>
                    <FormInput onChange={(e) => setJobTitle(e.target.value)} inputfield="Enter Job Title" />
                </div>

                <div>
                    <h1 className="text-xl font-bold">Job Description</h1>
                    <FormInput onChange={(e) => setjobDescription(e.target.value)} inputfield="Enter Job Description" />
                </div>

                <div>
                    <h1 className="text-xl font-bold">Experience Level</h1>
                    <FormInput onChange={(e) => setExperienceLevel(e.target.value)} inputfield="Select Experience Level" />
                </div>

                <div>
                    <h1 className="text-xl font-bold">Candidates Email</h1>
                    <FormInput onChange={(e) => setCandidatesEmail(e.target.value)} inputfield="Candidates Email" />
                </div>

                <div>
                    <h1 className="text-xl font-bold">End Date</h1>
                    <FormInput onChange={(e) => setEndDate(e.target.value)} type="date" inputfield="Select a Date" />
                </div>
                <Button onClick={handlePosting} btntype="Send Job Posting" />
            </Formbox>
        </>
    )
}