import React, { useState } from "react";

function MyComponent() {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carModel, setCarModel] = useState("")

    function addCar() {
        const newCar = {year: carYear, model: carModel}
        setCars(cars => [...cars, newCar])

        setCarYear(new Date().getFullYear())
        setCarModel("")
    }

    function remCar(index) {
        setCars(c => c.filter((_, i) => i !== index) )
    }

    function setYear(e) {
        setCarYear(e.target.value)
    }

    function setModel(e) {
        setCarModel(e.target.value)
    }

    return(
    <>
        <h2>Car obj</h2>
        <ul>
            {cars.map((car, index) => <li key={index} onClick={()=>remCar(index)}>{car.year} - {car.model}</li>)}
        </ul>
        <input type="number" value={carYear} onChange={setYear} placeholder="Year"/><br />
        <input type="text" value={carModel} onChange={setModel} placeholder="Model"/><br />
        <button onClick={addCar}>Add car</button>
    </>
    )
}

export default MyComponent