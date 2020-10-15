import React, { Component } from 'react';
import store from '../../store/index'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        store.subscribe(this.storeClick)
    }
    
        storeClick =()=>{
            this.setState(store.getState())
        }
    
    
    render() { 
        return ( 
            <div>
                <p>hello world</p>
                {this.state.age}
                {this.state.sex}
            </div>
         );
    }
}
 
export default Detail;