import {combineReducers} from 'redux'


const player1NameReducer = (player1Name = null, action) => {
  if(action.type === "ONE_NAME"){
    player1Name = action.payload
  }
  return player1Name
}

const player2NameReducer = (player2Name= null, action) => {
  return player2Name
}

const player1ChoiceReducer = (player1Choice= null, action) => {
  return player1Choice
}

const player2ChoiceReducer = (player2Choice= null, action) => {
  return player2Choice
}

const winnerReducer = (winner= null, action) => {
  return winner
}

export default combineReducers ({
  player1Name: player1NameReducer,
  player2Name: player2NameReducer,
  player1Choice: player1ChoiceReducer,
  player2Choice: player2ChoiceReducer,
  winner: winnerReducer
})
