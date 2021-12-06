import { SET_LOCAL_DATA,SET_LOCAL_STATE } from "../action";
//import { getData, storeData } from '../../helpers/localStorage';
import { getData,storeData } from "../helpers/localStorage";
const initialState={
    state:getData('data')||[],
    data:[],

};
export const localData =(state-initialState,action) => {
    switch (action.type) {
       
        case SET_LOCAL_STATE:
            return{
                ...state,

            }
            case SET_LOCAL_DATA:
                return{
                ...state,
                data: action.payload
                }   
        default:
            break;
    }
}