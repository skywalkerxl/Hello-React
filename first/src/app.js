import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ReactDom from 'react-dom';
import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js'
import Home from "./components/home/Home";

require('semantic-ui/dist/semantic.min.css')
require('./common/style/main.css');

let dataArr = [
    {
        imgSrc: require('image/matthew.png'),
        name: 'Matt Giampietro',
        rel: '好友',
        desc: 'Matthew is an interior designer living in New York.',
        year: 2013,
        likeNum: 75
    },
    {
        imgSrc: require('image/molly.png'),
        name: 'Molly',
        rel: 'Coworker',
        desc: 'Molly is a personal assistant living in Paris.',
        year: 2011,
        likeNum: 105
    },
    {
        imgSrc: require('image/elyse.png'),
        name: 'Elyse',
        rel: 'Coworker',
        desc: 'Elyse is a copywriter working in New York.',
        year: 2014,
        likeNum: 75
    }
]

//  使用context
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            view: 'home'
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView(view){
        this.setState({
            view: view
        })
    }

    getChildContext(){
        return {
            et: 'Joined'
        }
    };

    componentDidUpdate(){
        console.log("App 更新好了");
    }

    componentDidMount(){
        console.log("App 渲染好了");
    }

    render(){
        let {view} = this.state;

        let {data} = this.props;

        let viewComp = null;

        switch (view){
            case 'home':
                viewComp = <Home/>;
                break;
            case 'list':
                viewComp = <CardWrap data={data}/>;
                break;
            default:
                viewComp = <Home/>;
        }

        return (
            <div className={"ui container"}>
                <div className={"ui dividing"}></div>
                <Nav changeView={this.changeView}/>
                {viewComp}
            </div>
        )
    }
}

App.childContextTypes = {
    et: PropTypes.string
}


ReactDom.render(
    //JSX的语法
    <App data={dataArr}/>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept();
}