import App from "./components/App"
import ErrorPage from "./components/ErrorPage";
import FlightList from "./components/FlightList";
import NewFlightForm from "./components/NewFlightForm";

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
                element: <NewFlightForm/>
            },
            {
                path: "/about",
                element: <h1>About Us section goes here...</h1>
            }
        ]
    }
]

export default routes;