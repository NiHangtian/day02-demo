import React, { Component } from 'react';
import Input from "./input.jsx";
import List from "./List.jsx";
class App extends Component {
    state = { 
        list:[]
        
     }
    dataup=(data)=>{
            this.setState({
                list:this.state.list.concat(data)
                // list:this.state.list.push(data)
            })    
    }

    removeList=(index)=>{
        console.log(index);
        this.setState({
            list: this.state.list.filter((item,i)=>{
                return index!==i
            })
        })
    }

    render() {
        return (
            <div style={{width:'200px',border:'1px solid red',margin:'0 auto',background:'#ddd'}}>
                <Input onDataup={this.dataup}/>
                <hr/>
                <List onRemoveList={this.removeList} name='asd' list={this.state.list}/>
            </div>
        );
    }
}

export default App;