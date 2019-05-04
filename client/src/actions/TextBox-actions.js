export function addToCurrentText(newCharacter){
  return{
    type: 'ADD_TO_CURRENT_TEXT',
    newCharacter
  }
}

export function goToNewLine(){
  return{
    type: 'GO_TO_NEW_LINE'
  }
}

export function finishCurrentLine(){
  return{
    type: 'FINISH_CURRENT_LINE'
  }
}
