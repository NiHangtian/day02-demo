import React, { Component } from 'react';
import "./input.css"
class input extends Component {
    state = { 
        str:''
     };
    textChange =(ev)=>{
       
        this.setState({
            str:ev.target.value
        })
    }
    setStr(data){
       if(this.state.str!==''){
           this.props.onDataup(data)
        this.setState({
            str:''
        })
       } 
    }
    render() {
        return (
            <div className="input-box">
                <input type="text" value={this.state.str} onChange={this.textChange} />
                <button onClick={()=>this.setStr(this.state.str)}>提交</button>
            </div>
            
        );
    }
}

export default input;