const initialState = {

}

export default function uiReducer(state = initialState, action) {
  switch(action.type) {
    case '':
      return Object.assign({}, state)
    default:
      return state
  }
}