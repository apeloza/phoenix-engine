const initialState = {
  currentCase: null,
}

function gameScript(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_NEW_CASE':
    break;
    case 'LOAD_SAVE_GAME':
    break;
    default:
    return state;
  }
}

export default gameScript;
