import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { ProfileArea, Name, Username, Img, Text, Location } from './styles';

const renderLocation = (location) => {
    return (
        <Location>
            <FontAwesomeIcon icon={faMapMarker} />
            <h5> {location} </h5>
        </Location>
    );
}

const Profile = (props) => {
    const user = props.user;

    return(
        <ProfileArea>
            <Name>{user.name}</Name>
            <Username>{user.login}</Username>
            <Img src={user.avatar_url} alt=""/>
            {user.bio ? <Text>{user.bio}</Text> :null}
            {user.location ? renderLocation(user.location) : null}
        </ProfileArea>
    );
}

export default Profile;