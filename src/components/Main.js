import React from 'react';
import UserRepos from './UserRepos';
import './../App.css';

function Main(props) {
    if (props.user){
        return (
            <main>
                <div id="userInfo">
                    <img src={props.user.avatar_url} alt="avatar" width="200" height="200" />
                    <h2>{props.user.login}</h2>
                    <p>seguidores: {props.followers} / seguindo: {props.user.following}</p>
                    <p><a href={props.user.html_url}>view details</a></p>
                </div>
                <div id="reposInfo">
                    <UserRepos />
                </div>
            </main>
        );
    } else {
        return(
            <main>
                <h1>Favoritos:</h1>
                
            </main>
        );
    }
}

export default Main;