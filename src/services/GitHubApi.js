export const getUser = async(userName) => {
    const userProfile = await fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(json => ({
          name: json.name,
          followerCount: json.followers,
          followingCount: json.following,
          userProfile: json.html_url
      }));

const userRepos = await fetch(`https://api.github.com/users/${userName}/repos`)
  .then(res => res.json())
  .then(json => json.map(userRepo => ({
    name: userRepo.nam,
    url: userRepo.html_url
  })));

  return { userProfile, userRepos };  
};