import React from 'react';
import './../App.css';
import Homepage from './Homepage';

function MainUser(props) {
    function back(){
        props.user = null; // verificar método para exivir outro componente no lugar desse pu algo semelhante sem recarregar a pagina
    }

    if (props.user){

        return (
            <div id="userInfo">
                <button id="back" onClick={back}>Voltar</button>
                <img src={props.user.avatar_url} alt="avatar" width="200" height="200" />
                <h2>{props.user.login}</h2>
                <p>seguidores: {props.followers} / seguindo: {props.user.following}</p>
                <p><a href={props.user.html_url}>view details</a></p>
            </div>
        );
    } else {
        return(
            <Homepage />
        );
    }
}

export default MainUser;