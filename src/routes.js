import App from "./components/App"
import ErrorPage from "./components/ErrorPage";
import FlightList from "./components/FlightList";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <FlightList/>
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