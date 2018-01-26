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

// 这里对context做属性验证
let contextTypes = {
    et: PropTypes.string
}

export default class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            isHeartON: false,
            yearNum: props.year
        }

        this.heartClick = this.heartClick.bind(this)
        this.yearAdd = this.yearAdd.bind(this)
    }

    heartClick(){
        let {isHeartON} = this.state;
        isHeartON = !isHeartON;
        this.setState({
            isHeartON
        })
    }

    yearAdd(){
        this.setState({
            yearNum: this.state.yearNum + 10
        })
    }


    render(){
        let { imgSrc, name, rel, desc, year, likeNum } = this.props;  // 这里结构赋值

        let { et } = this.context;

        let {isHeartON, yearNum} = this.state;

        let heartClass = isHeartON ? '' : 'empty'

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
                    <span
                        className={"right floated"}
                        onClick={this.yearAdd}
                    >{`${et} in ${yearNum}`}</span>
                    <span><i
                        className={`${heartClass} heart icon`}
                        onClick={ this.heartClick }
                    ></i>{` ${likeNum} like`}</span>
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;