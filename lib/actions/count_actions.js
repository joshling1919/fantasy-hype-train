export const CountConstants = {
  ADD_COUNT: "ADD_COUNT"
};


export const addCount = count => ({
  type: CountConstants.ADD_COUNT,
  payload: count
});
