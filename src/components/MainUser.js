import React from 'react';
import './../App.css';

function MainUser(props) {
    if (props.user){
        return (
            <div id="userInfo">
                <img src={props.user.avatar_url} alt="avatar" width="200" height="200" />
                <h2>{props.user.login}</h2>
                <p>seguidores: {props.followers} / seguindo: {props.user.following}</p>
                <p><a href={props.user.html_url}>view details</a></p>
            </div>
        );
    } else {
        return(
            <div>
                <h1>Favoritos:</h1>
            </div>
        );
    }
}

export default MainUser;