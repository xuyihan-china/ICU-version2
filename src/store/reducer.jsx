// import {heartArray,breathArray,bloodArray} from '../random'
const defaultState = {
    age: 20,
    sex: '男',
    inputValue:'输入你想做的事情',
    list:['上午12:00:00 icu3查房','上午13:00:00 和老王一起开会','上午14:00:00 发年终奖','下午17:00:11 打卡下班','下午19:00:00 泡杯枸杞','晚上20:00:00 喝杯热牛奶睡觉','晚上20:01:01 自己从梦里醒过来,发现自己还在单位','上午11:00:00 梦醒了'],
    date:' '
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
    return state
}