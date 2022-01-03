export const PLAYLIST_URL = "https://api.spotify.com/v1/me/playlists";
export const USER_URL = "https://api.spotify.com/v1/me";
export const PLAYLIST = (playlist_id) =>
  `https://api.spotify.com/v1/playlists/${playlist_id}`;
export const NEWRELEASES =
  "https://api.spotify.com/v1/browse/new-releases?country=NG&limit=16&offset=10";
export const FEATURED_PLAYLISTS =
  "https://api.spotify.com/v1/browse/featured-playlists?country=NG&locale=Lagos&limit=10&offset=5";
