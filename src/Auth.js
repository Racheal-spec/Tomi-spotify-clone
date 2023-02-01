const { REACT_APP_AUTHURL, REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } =
  process.env;

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
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      //let [key, value] = item.split("=");
      //initial[key] = value;
      return initial;
    }, {});
};

export const loginURL = `${REACT_APP_AUTHURL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;
