// const header=React.createElement("h1",{},"Oli");
import React, { Children, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/ErrorComp";
import Restaurant from "./components/Restaurant";
import Profile from "./components/Profile";
// import InstaMart from "./components/InstaMart";


const AppLayoutComponent = () => {
    return (
        <div className="app">
            {/* so my header footer is constant */}
            {/* I want middle of the page keep on changing */}
            <Header />
            {/* all children go into outlet */}
            {/* outlet is filled what you put inside outlet */}
            <Outlet />
            {/* <Footer/> */}
        </div>
    )
}
//want to route based omn my path
// about should by inside app layout
// const InstaMart=lazy(()=>{import()})
const InstaMart = lazy(()=>import("./components/InstaMart"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        errorElement: <ErrorComp />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children:[{
                    path:"profile",
                    element:<Profile/>
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:id",
                element:<Restaurant/>
            },
            {
                path:"/instamart",
                element:<InstaMart/>
            }
        ]
    },


])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)