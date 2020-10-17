import React, { Component } from 'react';

import "./List.css"
class List extends Component {
    // 
    removeList=(index)=>{  
            this.props.onRemoveList(index)
    }
    render() {
        return (
            <ul >
                {this.props.list.map((item,index)=>{
                    return (
                        <li className="list-li" key={index}>
                            <p><span>{index}</span><i>{item}</i></p>
                            <button onClick={()=>this.removeList(index)}>删除</button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default List;