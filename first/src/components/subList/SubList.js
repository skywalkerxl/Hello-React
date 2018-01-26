import React, {Component} from 'react'

export default class SubList extends Component {
    render(){
        return (
            <div className={"list sublist clear"}>
                <div className={"fl part-left"}>
                    <img src={img1} />
                </div>
                <div className={"fl part-right"}>
                    <strong>Matt</strong><br />
                    <span>How artisticHow artisticHow artistic</span><br />
                    <a>回复</a>
                </div>
            </div>
        )
    }
}