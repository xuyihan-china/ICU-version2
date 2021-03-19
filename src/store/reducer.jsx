// import {heartArray,breathArray,bloodArray} from '../random'
const defaultState = {
    age: 20,
    sex: '男',
    inputValue:'输入你想做的事情',
    list:['上午12:00:00 icu3查房','上午13:00:00 院里开会','上午14:00:00 门诊','下午17:00:11 下班'],
    date:' ',
    isHealth:true
}
export default (state = defaultState, action) => {
    if (action.type === 'age') {
        let newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if (action.type === 'sex') {
        let newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if (action.type === 'change_input_value') {
        const newState = { ...state };
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === "add_todo_item") {
        let date = new Date().toLocaleTimeString();
        const newState = { ...state };
        newState.list.push(date+ "    "+newState.inputValue)//push 入数组 
        newState.inputValue = ""//然后清空输入栏
        return newState
    }
    if (action.type === "delete_item") {
        const newState = { ...state };
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type ==="isHealth"){
        const newState ={...state}
        newState.isHealth = action.value
        return newState
    }
    return state
}