import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    return (
        <div className="sm:mx-28 mx-6">
            <h1 className="text-5xl pt-4 font-semibold"  ><span className="cursor-pointer" onClick={() => navigate("/") }>Quiz World</span></h1>
        </div>
    );
}

export default Navbar;
