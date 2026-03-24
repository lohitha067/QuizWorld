import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Category from "./components/category/Category.jsx";
import Quiz from "./pages/Quiz.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Category />,
            },
            {
                path: "/quiz/:categoryID",
                element: <Quiz />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
);
