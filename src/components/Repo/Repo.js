import React from 'react';
import './repo.css';

const Repo = (props) => {
    const repo = props.repo;

    return (
        <div className="repoCard">
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
        </div>
    );
}

export default Repo;