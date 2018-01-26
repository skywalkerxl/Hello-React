import React, {Component} from 'react'

export default class Card extends Component{
    render(){
        let { imgSrc, name, rel, desc, year, likeNum } = this.props;  // 这里结构赋值
        return (
            <div className={"ui card"}>
                <div className={"image"}>
                    <img src={imgSrc}/>
                </div>
                <div className={"content"}>
                    <div className={"header"}>{name}</div>
                    <div className={"meta"}>
                        <a href={""}>{rel}</a>
                    </div>
                    <div className={"description"}>{desc}</div>
                </div>
                <div className={"extra content"}>
                    <span className={"right floated"}>{`Joined in ${year}`}</span>
                    <span><i className={"empty heart icon"}></i>{` ${likeNum} like`}</span>
                </div>
            </div>
        )
    }
}