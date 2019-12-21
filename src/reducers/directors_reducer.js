export default function(state = {}, action) {
  switch (action.type) {
    case "DIR_LIST":
      return {
        ...state,
        directors: action.payload
      };
    default:
      return state;
  }
}
