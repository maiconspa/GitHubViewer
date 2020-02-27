import React from 'react';

// Stylization
import { RepoCard } from './styles.js';

const Repo = (props) => {
    const repo = props.repo;

    return (
        <RepoCard>
            <a href={repo.html_url}>
                {repo.name}
            </a>
            <p>
                {repo.description}
            </p>
        </RepoCard>
    );
}

export default Repo;