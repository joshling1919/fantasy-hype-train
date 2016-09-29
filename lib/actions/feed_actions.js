export const FeedConstants = {
  REQUEST_PLAYERS: "REQUEST_PLAYERS",
  RECEIVE_PLAYERS: "RECEIVE_PLAYERS"
};


export const requestPlayers = () => ({
  type: FeedConstants.REQUEST_PLAYERS
});


export const receivePlayers = players => ({
  type: FeedConstants.RECEIVE_PLAYERS,
  players
});
