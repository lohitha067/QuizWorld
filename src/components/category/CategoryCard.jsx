import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ title, categoryID }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center text-2xl p-4 sm:w-64 w-72 h-32 rounded-xl text-[#5534dc] bg-white hover:font-semibold transition-all duration-200 ease-in-out hover:drop-shadow-xl">
            <h1
                className="text-wrap text-center hover:[text-shadow:1px_1px_3px_#808080]"
                onClick={() => navigate(`quiz/${categoryID}`)}
            >
                {title}
            </h1>
        </div>
    );
}

export default CategoryCard;
