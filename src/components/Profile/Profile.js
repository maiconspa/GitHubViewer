import React from 'react';

const Profile = (props) => {
    return(
        <div id="ProfileArea">
            <img src={props.user.avatar_url} alt=""/>
            <h1>{props.user.name}</h1>
            <h3>{props.user.login}</h3>
            <h6>location: {props.user.location}</h6>
        </div>
    );
}

export default Profile;