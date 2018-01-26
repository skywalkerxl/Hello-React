import React, {Component} from 'react'
import PropTypes from 'prop-types'

// 这里属性验证
let propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    rel: PropTypes.string,
    desc: PropTypes.string,
    year: PropTypes.number,
    likeNum: PropTypes.number
}

let contextTypes = {
    et: PropTypes.string
}

export default class Card extends Component{
    render(){
        let { imgSrc, name, rel, desc, year, likeNum } = this.props;  // 这里结构赋值

        let { et } = this.context;

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
                    <span className={"right floated"}>{`${et} in ${year}`}</span>
                    <span><i className={"empty heart icon"}></i>{` ${likeNum} like`}</span>
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;