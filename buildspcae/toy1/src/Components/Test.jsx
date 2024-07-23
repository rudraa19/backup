import React from "react";
import { useParams } from "react-router-dom";


const Test = () => {
    const {name} = useParams();
    return(
        <>{name}</>
    )
}

export default Test