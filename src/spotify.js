/*https://developer.spotify.com/documentation/web-playback-sdk/quick-start/*/   

/* using spotify api to handle authentication*/
export const authEndpoint = "https://accounts.spotify.com/authorize";

/* after authentication, redirects back to app*/
const redirectUri = "http://localhost:3000/";

const clientID = "cc556d5661d545d1903da7c3abf5cf1c";

//pulling access token after authentication
export const getTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        var parts = item.split("=");

        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;


    },{})


}

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "playlist-read-private",
    "user-modify-playback-state",
    "playlist-read-collaborative",
]

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_disalog=true`;