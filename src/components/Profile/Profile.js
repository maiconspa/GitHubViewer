import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './profile.css';

const renderLocation = (location) => {
    return (
        <div className="group">
            <FontAwesomeIcon icon={faMapMarker} />
            <h6>{location}</h6>
        </div>
    );
}

const Profile = (props) => {
    const user = props.user;

    return(
        <div id="profileArea">
            <h1>{user.name}</h1>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt=""/>
            {user.bio ? <p>{user.bio}</p> :null}
            {user.location ? renderLocation(user.location) : null}
        </div>
    );
}

export default Profile;