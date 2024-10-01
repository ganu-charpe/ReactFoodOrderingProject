import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/HeaderComponent";
import Body from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// const heading = React.createElement('h1', {}, "Hello React");

// //JSX
// const jsxHeading = (
// <h1 className="heading">
//     Hello React using JSX
// </h1>);

// const Title = () => <h1>Hello </h1>;
// const name = 'Ganesh';

// // React Functional Component 
// const HeadingComponent = () => {
//     return (
//         <div>
//             {Title()}
//              <div> <Title/> {name} </div>
//              <h2> Hello React Funtional Component</h2>
//         </div>
//     )
// }


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorComponent/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <AboutComponent/>
            },
            {
                path: "/contact",
                element: <ContactComponent/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);