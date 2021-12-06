export const SET_LOCAL_DATA ='SET_LOCAL_DATA';
export const SET_MEASSUREMENT ='SET_MEASSUREMENT';
export const SET_LOCAL_STATE ='SET_LOCAL_STATE'

export const setMeassurement = (payload) => ({type:SET_MEASSUREMENT,payload})
export const setLocalData = (payload) => ({type:SET_LOCAL_DATA,payload})
export const setLocalSatte = (payload) => ({type:SET_LOCAL_STATE,payload})