import { useOutletContext, useNavigate } from "react-router-dom";

import { useState } from "react";

function NewFlightForm(){

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        airline: "",
        image: "",
        flight_number: ""
    })

    const {addFlight} = useOutletContext()

    function handleSubmit(event){
        event.preventDefault()

        addFlight(formData)

        setFormData({
            airline: "",
            image: "",
            flight_number: ""
        })

        navigate('/')
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Flight</h2>
            <label htmlFor="airline-input">Airline: </label>
            <input onChange={updateFormData} type="text" id="airline-input" name="airline" value={formData.airline}/>
            <br/><br/>
            <label htmlFor="image-input">Image: </label>
            <input onChange={updateFormData} type="text" id="image-input" name="image" value={formData.image}/>
            <br/><br/>
            <label htmlFor="flight-number-input">Flight Number: </label>
            <input onChange={updateFormData} type="text" id="flight-number-input" name="flight_number" value={formData.flight_number}/>
            <br/><br/>
            <input type="submit" value="Add Flight"/>
        </form>
    )
}

export default NewFlightForm;