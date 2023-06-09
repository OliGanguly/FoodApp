// const header=React.createElement("h1",{},"Oli");
import React, { Suspense, lazy, useEffect, useState } from "react";

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
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import UserContext from "./context/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";




const AppLayoutComponent = () => {
    const [user, setUser] = useState({
        name: "Oli Ganguly",
        email: "oliganguly@gmail.com"
    })
    // useEffect(()=>{
    //     //its overridding
    //     setTimeout(()=>setUser({
    //         name:"Oli Chowdhury Ganguly",
    //         email:"oliganguly28@gmail.com"
    //      }),10000)
     
    // },[])
    return (
         
        // override the default value
        //so we are passing dynamic value
        //so wrapping it all accross
        // like i passed user i can pass setuser to modify
        //context
        //useContext for context and Provider for redux
        <Provider store={store}>
           <UserContext.Provider 
            value={{
            user:user,
            setUser:setUser
            }}>
            <Header />
            <Outlet />
            {/* <Footer/> */}
        </UserContext.Provider> 
        </Provider>
        

        // <UserContext.Provider value={{
        //     user: { user }
        // }}>
        //     <div className="app">
        //         {/* so my header footer is constant */}
        //         {/* I want middle of the page keep on changing */}
        //         <Header />
        //         {/* all children go into outlet */}
        //         {/* outlet is filled what you put inside outlet */}
        //         <Outlet />
        //         <Footer />
        //     </div>
        // </UserContext.Provider>

    )
}
//want to route based omn my path
// about should by inside app layout
// const InstaMart=lazy(()=>{import()})
const InstaMart = lazy(() => import("./components/InstaMart"));
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
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurant/:id",
                element: <Restaurant />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><InstaMart /></Suspense>
            }
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)