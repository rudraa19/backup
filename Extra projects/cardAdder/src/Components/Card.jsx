import React, { useEffect, useState } from "react";
import './Card.css'

function Card (props) {
    const defaultUser = {
        avatar_url: "https://via.placeholder.com/150", // Placeholder image
        login: "githubUser",
        html_url: "#",
        followers: 0,
        public_repos: 0
    };

    const [user, setUser] = useState({});

    useEffect(()=>{
        fetch(`https://api.github.com/users/${props.name}`)
        .then((response)=>response.json())
        .then((data)=>{
            setUser(data);
        })
        .catch((error)=> console.log(error))
    }, [props.name])

    return(
        <div className="card">
            <img className="card-img" src={user.avatar_url || defaultUser.avatar_url} alt="Profile pic" width={150}/>
            <h3><a href={user.html_url || defaultUser.html_url} target="_blank">{user.login || defaultUser.login}</a></h3>
            <hr />
            <p>Followers: {user.followers || defaultUser.followers}</p>
            <p>Public Repo: {user.public_repos || defaultUser.public_repos}</p>
        </div>
    )
}

export default Card