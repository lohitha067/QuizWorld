import React from "react";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

function Category() {
    const list = useSelector((state) => state.category.value);
    const excludedIds = new Set([20, 13, 19, 24, 25, 26, 28, 30]);
    return (
        <div className="sm:mx-28 mx-4 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 place-items-center gap-4 p-4">
            {/* Category Card */}
            {list
                .filter((item) => !excludedIds.has(item.id))
                .map((item) => (
                    <CategoryCard
                        key={item.id}
                        title={item.name}
                        categoryID={item.id}
                    />
                ))}
        </div>
    );
}

export default Category;
