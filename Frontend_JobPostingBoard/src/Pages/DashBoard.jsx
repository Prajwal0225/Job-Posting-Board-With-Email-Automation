import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";

export function DashBoard() {
    return (
        <>
            <Link to='/posting'>
                <div className="w-1/6 m-10">
                    <Button btntype="Create Interview" />
                </div>
            </Link>
        </>
    );
}