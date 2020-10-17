import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super()
        this.changeText=this.changeText.bind(this)
    }
    state = { 
        textValue:"hello"
     }
    // changeText(ev){
    //     this.setState({
    //         textValue:ev.target.value
    //     })
    
    // }
    // changeText=(ev)=>{
    //     this.setState({
    //         textValue:ev.target.value
    //     })
    // }

    changeText=(ev)=>{
        return()=>{
            this.setState({
                textValue:ev.target.value
            })
        }
    }
    render() {
        return (
            <>
            <input type="text" value={this.state.textValue} onChange={this.changeText}/>
            </>
        );
    }
}

export default App;