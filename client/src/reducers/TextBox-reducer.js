import data

const initialState = {
  currentCharacter: 0
  currentDisplayedText: ''
  currentTextToDisplay: ''
}

function textBox(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CURRENT_TEXT':
    break;
    case 'GO_TO_NEW_LINE':
    break;
    case 'FINISH_CURRENT_LINE':
    break;
    case 'LOAD_NEW_CASE':
    break;
    case 'LOAD_SAVE_GAME':
    break;
    default:
    return state;
  }
}

export default textBox;
