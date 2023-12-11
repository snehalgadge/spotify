// after login redirecting to the spotify login page for authorization
export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "c92891925e014fba913daa9d247585b2";

// once authorized redirecting back to the local host(home page)
const redirectUri = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenUrl =() =>{
    return window.location.hash
    .substring(1)
    .split('&')
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;