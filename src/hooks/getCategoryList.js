import React, { useEffect, useState } from "react";

function useCategoryList() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "https://opentdb.com/api_category.php"
                );
                const data = await response.json();
                setCategory(data?.trivia_categories);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);
    return category;
}

export default useCategoryList;
