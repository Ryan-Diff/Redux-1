export const getUser = async(userName) => {
    const userProfile = await fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(json => json.map(profile => ({
          name: profile.name,
          followerCount: profile.followers,
          followingCount: profile.following,
          userProfile: profile.html_url
      })));

    return userProfile;  
};