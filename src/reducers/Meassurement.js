import { SET_MEASSUREMENT } from "../action";
const initialState = {
  meassure: {
    weight: '',
    height: '',
    date:  new Date().toLocaleString().split(',')[0],
  }
};
  const Meassurement =(state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type) {
      case SET_MEASSUREMENT:
        return{
          ...state,
          meassure : action.payload
        }
      default:
        return state;
    }
  }
export default Meassurement;