import React, {Component} from 'react'

export default class Home extends Component {
    render(){
        return(
            <img
                className={"ui fluid image"}
                src={require('image/elyse.png')}
                alt={""}
            />
        )
    }
}