import React, {Component} from 'react'

export default class Nav extends Component {
    render(){

        let {changeView} = this.props;

        return (
            <div className={"ui menu"}>
                <div className={"header item"}>Noods</div>
                <div
                    onClick={()=>{
                        changeView('home')
                    }}
                    className={"item"}
                >Home</div>
                <div
                    onClick={()=>{
                        changeView('list')
                    }}
                    className={"item"}
                >List</div>
                <div className={"item right"}>Login</div>
            </div>
        )
    }
}