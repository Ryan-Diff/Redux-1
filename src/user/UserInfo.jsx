import React, { Profiler } from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const userProfile = useSelector(state => state.userProfile);
    const userRepos = useSelector(state => state.userRepos);
    const loading = useSelector(state => state.loading);

    if (loading) return <h1>Loading...</h1>;
    const repoElements = userRepos.map(userRepo => (
        <li key={userRepos.name}>
            <p>{userRepo.name}</p>
            <a href={userRepo.url}>Link: {userRepo.url}:</a>
        </li>
    ));

    return (
        <>
            <h1>{userProfile.name}</h1>
            <a href={userProfile.userProfile}>GitHub Link: {userProfile.userProfile}</a>
            <p>Followers: {userProfile.followerCount}</p>
            <p>Following: {userProfile.followingCount}</p>
            <ul>
                Repositories: 
                {repoElements}
            </ul>
        </>
    );
};

export default UserInfo;