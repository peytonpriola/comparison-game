import {combineReducers} from 'redux'


const nameOneReducer = (selectedName = null, action) => {
  if(action.type === "ONE_NAME"){
    selectedName = action.payload
  }
  return selectedName
}

export default combineReducers ({
  selectedName: nameOneReducer
})
