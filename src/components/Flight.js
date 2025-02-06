function Flight({flight}){
    return (
        <li>
            <h2>Flight # {flight.id}</h2>
            <img src={flight.image} alt={flight.airline}/>
            <h2>Airline: {flight.airline}</h2>
            <h2>Price: ${flight.price}</h2>
            <h2>Origin: {flight.origin}</h2>
            <h2>Destination: {flight.destination}</h2>
        </li>
    )
}

export default Flight;