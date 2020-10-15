// import {heartArray,breathArray,bloodArray} from '../random'
const defaultState ={
    age:20,
    sex:'男'
}
export default (state= defaultState,action)=>{
    if(action.type === 'age'){
        let newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if(action.type==='sex'){
        let newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    return state
}