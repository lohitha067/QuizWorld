import {useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import getCategoryList from "./hooks/getCategoryList";
import { useDispatch } from "react-redux";
import { setCategory } from "./features/categorySlice";
import { Outlet } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const list = getCategoryList();
    useEffect(() => {
        if (list.length > 0) {
            dispatch(setCategory(list));
        }
    }, [list, dispatch]);

    return (
        <div className="bg-gradient-to-b from-[#5534dc] to-[#8d7ada] max-w-screen min-h-screen text-white font-Poppins">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;
