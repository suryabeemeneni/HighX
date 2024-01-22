import React from 'react';
import './GitHub.css'
import GitHubTop from './GitHubSub/GitHubTop';
import GitHubContent from './GitHubSub/GitHubContent';

const GitHubHome = () => {
    return (
        <>
        <GitHubTop />
        <GitHubContent />
        </>
    );
};

export default GitHubHome;