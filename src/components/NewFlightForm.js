import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function NewFlightForm(){

    const { addFlight } = useOutletContext();

    const [formData, setFormData] = useState({
        airline: "",
        image: "",
        price: "",
        origin: "",
        destination: ""
    })

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()

        const newFlight = {
            ...formData,
            price: Number(formData.price)
        }

        fetch('http://localhost:4000/flights', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newFlight)
        })
        .then(response => {
            if(response.ok){
                response.json().then(newFlightData => {
                    addFlight(newFlightData)
                })
            }
            else{
                alert("Error: Unable to add new flight!")
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-airline">Airline: </label>
            <input onChange={updateFormData} type="text" id="new-airline" name="airline" value={formData.airline}/>
            <br/><br/>
            <label htmlFor="new-image">Image: </label>
            <input onChange={updateFormData} type="text" id="new-image" name="image" value={formData.image}/>
            <br/><br/>
            <label htmlFor="new-price">Price: </label>
            <input onChange={updateFormData} type="text" id="new-price" name="price" value={formData.price}/>
            <br/><br/>
            <label htmlFor="new-origin">Origin: </label>
            <input onChange={updateFormData} type="text" id="new-origin" name="origin" value={formData.origin}/>
            <br/><br/>
            <label htmlFor="new-destination">Destination: </label>
            <input onChange={updateFormData} type="text" id="new-destination" name="destination" value={formData.destination}/>
            <br/><br/>
            <input type="submit" value="Add Flight"/>
        </form>
    )
}

export default NewFlightForm;