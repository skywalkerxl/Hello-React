import Nav from 'nav/Nav'
import S from './style.scss'
import Home from 'view/home/Home.js'
import { Route } from 'react-router-dom'

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path={"/"} component={Home}></Route>
            </div>
        )
    }
}