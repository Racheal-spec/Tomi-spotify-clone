const AuthUrl = "https://accounts.spotify.com/authorize";

const clientID = "fc56128a1d2e41e485c96c36ba2434ad";

const redirectURI = "https://racheal-spec.github.io/Tomi-spotify-clone";

const scope = [
  "user-read-email",
  "user-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "streaming",
  "user-library-modify",
  "user-top-read",
];

export const getBearerToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //let parts = item.split("=");
      //initial[parts[0]] = decodeURIComponent(parts[1]);
      let [key, value] = item.split("=");
      initial[key] = value;
      return initial;
    }, {});
};

export const loginURL = `${AuthUrl}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;
