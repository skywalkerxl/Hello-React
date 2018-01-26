import React, {Component} from 'react'
import Card from "../card/Card";

export default class CardWrap extends Component{
    render(){
        let data = this.props.data;
        let cards = data.map((elt, i) => {
            return (
                <Card key={i} {...elt}/>
            )
        });
        return (
            <div className={"ui cards"}>
                {cards}
            </div>
        )
    }
}