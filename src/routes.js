import App from "./components/App"
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <h1>Render the list of flights here...</h1>
            },
            {
                path: "/add_flight",
                element: <h1>Form to add a new flight goes here...</h1>
            },
            {
                path: "/about",
                element: <h1>About Us section goes here...</h1>
            }
        ]
    }
]

export default routes;